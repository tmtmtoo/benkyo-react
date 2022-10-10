import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Top } from "./components/pages/Top";
import { About } from "./components/pages/About";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<Top />} />
        <Route path={"/about"} element={<About />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
