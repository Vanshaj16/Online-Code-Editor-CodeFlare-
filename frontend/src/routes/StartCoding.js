import React, { useState, useEffect } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike";
import { makeAuthenticatedPOSTRequest, makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { FaPlay, FaSave } from "react-icons/fa";

const StartCoding = () => {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("javascript");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    useEffect(() => {
        const loadSavedCode = async () => {
            try {
                const data = await makeAuthenticatedGETRequest("/runAPI/code");
                if (data.code) {
                    setCode(data.code);
                    setLanguage(data.language);
                }
            } catch (error) {
                console.error("Error loading saved code:", error);
            }
        };
        loadSavedCode();
    }, []);

    const handleLanguageChange = (e) => setLanguage(e.target.value);
    const handleCodeChange = (editor, data, value) => setCode(value);
    const handleInputChange = (e) => setInput(e.target.value);
    
    const handleSave = async () => {
        try {
            await makeAuthenticatedPOSTRequest("/runAPI/code", { code, language });
            alert("Code saved successfully");
        } catch (error) {
            console.error("Error saving code:", error);
        }
    };

    const handleRun = async () => {
        try {
            const data = await makeAuthenticatedPOSTRequest("/runAPI/run", { code, language, input });
            setOutput(data.output);
        } catch (error) {
            console.error("Error running code:", error);
        }
    };

    return (
        <div className="h-screen w-screen flex bg-gray-900 text-white">
            {/* Left Panel: Code Editor */}
            <div className="w-2/3 h-full flex flex-col p-4">
                <div className="flex justify-between items-center mb-4">
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="p-2 bg-gray-800 text-white rounded"
                    >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="cpp">C++</option>
                        <option value="c">C</option>
                        <option value="java">Java</option>
                    </select>
                    <div className="space-x-2 flex">
                        <button onClick={handleSave} className="px-4 py-2 bg-purple-600 text-white rounded flex items-center space-x-2 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors">
                            <FaSave /> <span>Save</span>
                        </button>
                        <button onClick={handleRun} className="px-4 py-2 bg-green-600 text-white rounded flex items-center space-x-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"> 
                            <FaPlay /> <span>Run</span>
                        </button>
                    </div>
                </div>
                <div className="flex-1 border border-gray-700 rounded overflow-hidden">
                    <CodeMirror
                        value={code}
                        options={{ mode: language, theme: "dracula", lineNumbers: true, lineWrapping: true }}
                        onBeforeChange={handleCodeChange}
                        className="code-mirror-wrapper"
                        box-shadow= "0 1rem 2rem -1rem black"
                    />
                </div>
            </div>

            {/* Right Panel: Input & Output */}
            <div className="w-1/3 h-full flex flex-col p-4">
                <h2 className="text-lg font-bold mb-2">Output:</h2>
                <pre className="flex-1 p-4 bg-gray-800 rounded text-sm overflow-y: auto">{output}</pre>
                <h2 className="text-lg font-bold mt-4 mb-2">Input:</h2>
                <textarea
                    value={input}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-800 rounded"
                    rows="4"
                ></textarea>
            </div>
        </div>
    );
};

export default StartCoding;
