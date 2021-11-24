import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
import Main from "./components/Main";
import AddPage from "./components/AddPage";
import styled from "styled-components";

import React from "react";

function App() {
  return (
    <AppAll className="App">
      <MainBox>
        {/* 페이지 경로 설정 */}
        <Route path="/" exact component={Main} />
        <Route path="/addpage" component={AddPage} />
      </MainBox>
    </AppAll>
  );
}
const AppAll = styled.div`
  width: 100%;
  height: 100vh;
  background: #eee;
  display: flex;
  /* flex-wrap: wrap; */

  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  background: #fff;
  width: 30%;
  height: 80vh;
  min-width: 400px;
  max-height: 80vh;
  padding: 20px;
  position: relative;
`;
export default App;
