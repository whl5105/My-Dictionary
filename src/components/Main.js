import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Main = (props) => {
  const history = useHistory();
  // 어떤함수를 가져오고싶니
  const data_list = useSelector((state) => state.card.card);
  console.log(data_list);
  return (
    <>
      <h1 style={{ color: "#333" }}>MY DICTIONARY</h1>
      <Cardbox>
        {data_list.map((c, idx) => {
          return (
            <Card key={idx}>
              <div>
                <span>단어</span>
                <p>{c.word}</p>
              </div>
              <div>
                <span>설명</span>
                <p>{c.explanation}</p>
              </div>
              <div>
                <span>예시</span>
                <p style={{ color: "blue" }}>{c.example}</p>
              </div>
            </Card>
          );
        })}
      </Cardbox>
      <Button
        onClick={() => {
          history.push("/AddPage");
        }}
      >
        +
      </Button>
    </>
  );
};
const Cardbox = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blueviolet; */
  overflow-x: hidden;
  overflow-y: auto;
  height: 71vh;
`;
const Card = styled.div`
  background-color: #d4d9e5;
  border: none;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
  & div {
    /* background-color: yellow; */
    text-align: left;
    margin-bottom: 10px;
  }
  & span {
    text-decoration: underline;
    font-weight: bold;
    font-size: 12px;
  }
  & p {
    margin: 0;
    padding: 5px;
    color: #333;
    word-break: break-all;
  }
`;
const Button = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  border: none;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export default Main;
