import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adduser from "./components/Adduser";
import Adminlogin from "./components/Adminlogin";
import Adminsignup from "./components/Adminsignup";
import Deleteuser from "./components/Deleteuser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adminlogin />} />
          <Route path="/signup" element={<Adminsignup />} />
          <Route path="/add" element={<Adduser />} />
          <Route path="/delete" element={<Deleteuser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
