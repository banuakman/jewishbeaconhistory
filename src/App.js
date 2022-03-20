import React from "react";
import { Routes, Route } from "react-router-dom";
import { ComingSoon } from "./Components/ComingSoon";

const App = () => (
  <Routes>
    <Route path="/" element={<ComingSoon />}></Route>
  </Routes>
);

export default App;
