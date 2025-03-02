import "./output.css";
import {useCookies} from "react-cookie";
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import StartCoding from "./routes/StartCoding";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
            <Routes>
              {/* Adding routs component here indicates to the package (react-router-dom) that we are starting to defin our routers inside this*/}
              <Route path="/home" element={<LoggedInHomeComponent/>}/>
              <Route path="/startcoding" element={<StartCoding/>}/>
              <Route path="*" element={ <Navigate to="/home"/>}/>
            </Routes>
          ):(// logged out routes
          <Routes>
            <Route path="/home" element={<HomeComponent/>}/>
            <Route path="/login" element={<LoginComponent/>}/> 
            <Route path="/signup" element={<SignupComponent/>}/>
            <Route path="*" element={ <Navigate to="/home"/>}/>
            <></>
          </Routes>
          )}
      </BrowserRouter>
      </div>
  );
}

export default App;
