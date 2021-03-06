import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ElonMain from "./components/ElonMain";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { state } from "./service/data";

const App = () => {
  // TODO здесь протекает абстракция
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
    console.log(JSON.stringify(state1))
    console.log(JSON.stringify(state2))
    console.log(JSON.stringify(state3))


    const value1 = Array.isArray(state1) ? "Ortga" : state1?.name;
    const value2 = !!state2?.name ? state2.name : "";
    const value3 = !!state3?.name ? state3.name : "";
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
                ortgaTitle = {getOrtgaTitle(useActive,useSecondActive, useThirdActive )}
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
