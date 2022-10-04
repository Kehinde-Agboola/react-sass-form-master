import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Index } from "./pages/SignUp/Index";
import "./stylesheet/sass/index.scss";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
};

export default App;
