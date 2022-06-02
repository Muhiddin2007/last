import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import {
  dom,
  mebel,
  mehmonxona,
  interyer,
  garden,
  qurilish,
  jihozlar,
} from "../service/data.js";
import { vector } from "./imgData";
import { Link } from "react-router-dom";

const Main = (props) => {
  const {
    onActives,
    useActive,
    useSecondActive,
    onSecondActives,
    useThirdActive,
    onThirdActives,
  } = props;
  return (
    <>
      <Father>
        <Ortga>
          <a href="#">
            <span>
              <FaArrowLeft />
            </span>
            Ortga
          </a>
        </Ortga>
        <div className="soon">
          <div className="list-wrapper">
            <ul className="list-group">
              {dom.map((state) => (
                <li
                  onClick={() => {
                    onActives(state);
                  }}
                  key={state.id}
                  className={
                    state === useActive
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {state.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              useActive.id == 1
                ? "list-wrapper2 d-inline"
                : "list-wrapper2 d-none"
            }
          >
            <ul className="list-group">
              {mebel.map((state) => (
                <li
                  onClick={() => {
                    onSecondActives(state);
                  }}
                  key={state.id}
                  className={
                    state === useSecondActive
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {state.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              useSecondActive.id == 3 && useActive.id == 1
                ? "list-wrapper2 d-inline"
                : "list-wrapper2 d-none"
            }
          >
            <ul className="list-group">
              {mehmonxona.map((state) => (
                <li
                  onClick={() => {
                    onThirdActives(state);
                  }}
                  key={state.id}
                  className={
                    state === useThirdActive
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {state.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              useSecondActive.id == 4 && useActive.id == 1
                ? "list-wrapper2 d-inline"
                : "list-wrapper2 d-none"
            }
          >
            <ul className="list-group">
              {interyer.map((state) => (
                <li
                  onClick={() => {
                    onThirdActives(state);
                  }}
                  key={state.id}
                  className={
                    state === useThirdActive
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {state.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              useActive.id == 2
                ? "list-wrapper2 d-inline"
                : "list-wrapper2 d-none"
            }
          >
            <ul className="list-group">
              {garden.map((state) => (
                <li
                  onClick={() => {
                    onSecondActives(state);
                  }}
                  key={state.id}
                  className={
                    state === useSecondActive
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {state.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              useSecondActive.id == 24 && useActive.id == 2
                ? "list-wrapper2 d-inline"
                : "list-wrapper2 d-none"
            }
          >
            <ul className="list-group">
              {qurilish.map((state) => (
                <li
                  onClick={() => {
                    onThirdActives(state);
                  }}
                  key={state.id}
                  className={
                    state === useThirdActive
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {state.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              useSecondActive.id == 25 && useActive.id == 2
                ? "list-wrapper2 d-inline"
                : "list-wrapper2 d-none"
            }
          >
            <ul className="list-group">
              {jihozlar.map((state) => (
                <li
                  onClick={() => {
                    onThirdActives(state);
                  }}
                  key={state.id}
                  className={
                    state === useThirdActive
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {state.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              (useSecondActive.id == 3 && useThirdActive.id == 10) ||
              (useSecondActive.id == 3 && useThirdActive.id == 11) ||
              (useSecondActive.id == 3 && useThirdActive.id == 12) ||
              (useSecondActive.id == 3 && useThirdActive.id == 13) ||
              (useSecondActive.id == 3 && useThirdActive.id == 14) ||
              (useSecondActive.id == 3 && useThirdActive.id == 15) ||
              (useSecondActive.id == 3 && useThirdActive.id == 16) ||
              (useSecondActive.id == 3 && useThirdActive.id == 17) ||
              (useSecondActive.id == 3 && useThirdActive.id == 18) ||
              (useSecondActive.id == 4 && useThirdActive.id == 19) ||
              (useSecondActive.id == 4 && useThirdActive.id == 20) ||
              (useSecondActive.id == 4 && useThirdActive.id == 21) ||
              (useSecondActive.id == 4 && useThirdActive.id == 22) ||
              useSecondActive.id == 5 ||
              useSecondActive.id == 6 ||
              useSecondActive.id == 7 ||
              useSecondActive.id == 8 ||
              (useSecondActive.id == 9 && useActive.id == 1) ||
              useSecondActive.id == 23 ||
              (useSecondActive.id == 24 && useThirdActive.id == 29) ||
              (useSecondActive.id == 24 && useThirdActive.id == 28) ||
              (useSecondActive.id == 24 && useThirdActive.id == 30) ||
              (useSecondActive.id == 24 && useThirdActive.id == 31) ||
              (useSecondActive.id == 24 && useThirdActive.id == 32) ||
              (useSecondActive.id == 24 && useThirdActive.id == 33) ||
              (useSecondActive.id == 24 && useThirdActive.id == 34) ||
              (useSecondActive.id == 24 && useThirdActive.id == 35) ||
              (useSecondActive.id == 24 && useThirdActive.id == 36) ||
              (useSecondActive.id == 24 && useThirdActive.id == 37) ||
              (useSecondActive.id == 24 && useThirdActive.id == 38) ||
              (useSecondActive.id == 24 && useThirdActive.id == 39) ||
              (useSecondActive.id == 24 && useThirdActive.id == 40) ||
              (useSecondActive.id == 25 && useThirdActive.id == 41) ||
              (useSecondActive.id == 25 && useThirdActive.id == 42) ||
              (useSecondActive.id == 25 && useThirdActive.id == 43) ||
              (useSecondActive.id == 25 && useThirdActive.id == 44) ||
              (useSecondActive.id == 25 && useThirdActive.id == 45) ||
              useSecondActive.id == 26 ||
              (useSecondActive.id == 27 && useActive.id == 2)
                ? "check d-nline"
                : "check d-none"
            }
          >
            {vector.map((image, index) => (
              <img key={index.id} src={image.img} />
            ))}
            <h3>
              Kategoriya tanlash <br /> <span>tugallandi</span>.
            </h3>
            <Link to="/elon">
              {" "}
              <button className="btn">Davom etish</button>
            </Link>
          </div>
        </div>
      </Father>
    </>
  );
};
// className={`${!grid_view ? "active" : null}`}
const Father = styled.section`
  padding-bottom: 70px;
  .soon {
    display: flex;
    width: 80%;
  }
  .list-wrapper {
    display: inline-flex;
    margin-top: 14px;
    margin-left: 192px;
    width: 261px;
    height: 377px;
    background: #f1f1f1;
    .list-group-item {
      margin: 0;
      padding-left: 15px;
      padding-bottom: 5px;
      padding-top: 8px;
    }
    .active {
      color: #fff;
      background: #192b58;
    }
    .list-group {
      width: 100%;
      list-style: none;
      padding-left: 0;
      padding-top: 5px;
      cursor: pointer;
    }
  }
  .d-inline {
    display: inline-flex;
  }
  .d-none {
    display: none;
  }
  .list-wrapper2 {
    margin-top: 14px;
    margin-left: 25px;
    width: 261px;
    height: 377px;
    background: #f1f1f1;
    .list-group-item {
      margin: 0;
      padding-left: 15px;
      padding-bottom: 5px;
      padding-top: 8px;
    }
    .active {
      color: #fff;
      background: #192b58;
    }
    .list-group {
      width: 100%;
      list-style: none;
      padding-left: 0;
      padding-top: 5px;
      cursor: pointer;
    }
  }
  .check {
    margin-top: 14px;
    margin-left: 19px;
    width: 212px;
    height: 277px;
    background: #f1f1f1;
    padding-left: 47px;
    padding-top: 100px;
    img {
      margin-left: 44px;
    }
    span {
      margin-left: 33px;
    }
  }
  .btn {
    background: #406bdb;
    width: 174px;
    height: 44px;
    border-radius: 4px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.9;
  }
`;

const Ortga = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  span {
    align-items: center;
    padding: 26px 19px;
    font-size: 13px;
  }
  a {
    color: #192b58;
    text-decoration: none;
    font-size: 20px;
    background: #f1f1f1;
    width: 75%;
    padding: 18px;
  }
`;

export default Main;
