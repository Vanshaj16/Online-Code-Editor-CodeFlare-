const express = require("express");
const router = express.Router();
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { auth } = require("../utils/helpers");

// Ensure the tmp directory exists
const tmpDir = path.join(__dirname, "../tmp");
if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
}

// Run code
router.post("/run", auth, (req, res) => {
    const { code, language, input } = req.body;
    let command;

    // Write user input to a temporary file
    const inputFile = path.join(tmpDir, `input_${Date.now()}.txt`);
    fs.writeFileSync(inputFile, input || "");

    switch (language) {
        case "javascript":
            command = `echo "${input.replace(/"/g, '\\"')}" | node -e "${code.replace(/"/g, '\\"')}"`;
            break;
        case "python":
            const pythonTempFile = path.join(tmpDir, `code_${Date.now()}.py`);
            fs.writeFileSync(pythonTempFile, code);
            command = `python "${pythonTempFile}" < "${inputFile}"`;
            break;
        case "cpp":
            const cppTempFile = path.join(tmpDir, `code_${Date.now()}.cpp`);
            const cppOutputFile = path.join(tmpDir, `code_${Date.now()}.out`);
            fs.writeFileSync(cppTempFile, code);
            command = `g++ "${cppTempFile}" -o "${cppOutputFile}" && "${cppOutputFile}" < "${inputFile}"`;
            break;
        case "c":
            const cTempFile = path.join(tmpDir, `code_${Date.now()}.c`);
            const cOutputFile = path.join(tmpDir, `code_${Date.now()}.out`);
            fs.writeFileSync(cTempFile, code);
            command = `gcc "${cTempFile}" -o "${cOutputFile}" && "${cOutputFile}" < "${inputFile}"`;
            break;
        case "java":
            const javaTempFile = path.join(tmpDir, `Main_${Date.now()}.java`);
            fs.writeFileSync(javaTempFile, code);
            command = `javac "${javaTempFile}" && java -cp "${tmpDir}" Main_${Date.now()} < "${inputFile}"`;
            break;
        default:
            return res.status(400).json({ error: "Unsupported language" });
    }

    exec(command, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
            res.json({ output: stderr });
        } else {
            res.json({ output: stdout });
        }
    });
});

module.exports = router;