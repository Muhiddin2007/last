import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ElonMain from "./components/ElonMain";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { state } from "./service/data";

const App = () => {
  const [useActive, setUseActive] = useState({});
  const [useSecondActive, setSecondUseActive] = useState({});
  const [useThirdActive, setThirdUseActive] = useState({});
  const onActives = (state) => {
    setUseActive(state);
  };
  const onSecondActives = (state) => {
    setSecondUseActive(state);
  };
  const onThirdActives = (state) => {
    setThirdUseActive(state);
  };
  const getOrtgaTitle = (state1, state2, state3) => {
    const value1 = !!state1 ? state1 : "";
    const value2 = !!state2 ? state2 : "";
    const value3 = !!state3 ? state3 : "";
    return `${value1} ${value2} ${value3}`;
  };
  useEffect(() => {
    let firstState = state();
    setUseActive(firstState);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={
              <Main
                onActives={onActives}
                useActive={useActive}
                useSecondActive={useSecondActive}
                onSecondActives={onSecondActives}
                onThirdActives={onThirdActives}
                useThirdActive={useThirdActive}
              />
            }
          />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/elon"
            element={
              <ElonMain
                getOrtgaTitle={getOrtgaTitle}
                OrtgaTitle={`${useActive?.name} ${useSecondActive?.name} ${useThirdActive?.name} `}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
