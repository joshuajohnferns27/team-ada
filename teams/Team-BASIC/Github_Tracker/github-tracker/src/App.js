import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import Adminlogin from "./pages/Adminlogin";
import Adduser from "./pages/Adduser";
import Dashboard from "./pages/DashBoard";
import Fpass from "./components/Cards/Forgot_pass/Fpass";

function App() {
  return (
    <>  
        <Routes>
          <Route path="/" exact element={<Adminlogin />} />
          <Route path="/add" element={<Adduser />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pass" element={<Fpass/>} />
        </Routes>
      
    </>
  );
}

export default App;
