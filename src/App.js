import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Homepage from "./Page/Homepage";
import Register from "./Page/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
