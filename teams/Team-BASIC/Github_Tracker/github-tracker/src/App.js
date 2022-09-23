import "./Adminlogin.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adminlogin from "./components/Adminlogin";
import Adminsignup from "./components/Adminsignup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adminlogin />} />
          <Route path="/signup" element={<Adminsignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
