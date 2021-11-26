import "./App.css";
import React from "react";
import Main from "./components/Main";
import AddPage from "./components/AddPage";
import styled from "styled-components";
import { Route } from "react-router";

function App() {
  return (
    <AppAll className="App">
      <MainBox>
        <Route path="/" exact component={Main} />
        <Route path="/addpage" component={AddPage} exact />
        <Route path="/addpage/:idx" component={AddPage} />
      </MainBox>
    </AppAll>
  );
}
const AppAll = styled.div`
  width: 100%;
  height: 100vh;
  background: #eee;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  background: #fff;
  width: 30%;
  height: 80vh;
  min-width: 300px;
  max-height: 80vh;
  padding: 20px;
  position: relative;
  border-radius: 10px;
`;
export default App;
