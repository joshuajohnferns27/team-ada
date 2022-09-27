import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/Admin.css";
import Adminlogin from "./components/Adminlogin";
import Adminsignup from "./components/Adminsignup";
import DashBoard from "./components/DashBoard"
import Deleteuser from "./components/Deleteuser";
import Adduser from "./components/Adduser";
import Done from "./components/Done";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adminlogin />} />
          <Route path="/signup" element={<Adminsignup />} />
          <Route path="/add" element={<Adduser />} />
          <Route path="/delete" element={<Deleteuser />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/done" element={<Done />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
