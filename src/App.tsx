import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body>
          <SideBar />
          <Routes>
            <Route path="/" element={null} />
          </Routes>
        </Body>
      </Router>
    </div>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  height: 100vh;
`;
