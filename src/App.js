import React from "react";
import Pages from "./pages/Pages";
import "./App.css";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>NBA Challenge</h1>
      <HashRouter>
        <Pages />
      </HashRouter>
    </div>
  );
}

export default App;
