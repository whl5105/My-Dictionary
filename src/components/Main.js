import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loadCardFB, deleteCardFB } from "../redux/modules/Card";
// icon
import { TiTickOutline, TiTimes } from "react-icons/ti";

const Main = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCardFB());
  }, []);

  const data_list = useSelector((state) => state.card.card);

  return (
    <>
      <h1 style={{ color: "#333" }}>MY DICTIONARY</h1>
      <Cardbox>
        {data_list.map((c, idx) => {
          return (
            <Card key={idx}>
              <div style={{ position: "absolute", right: "30px" }}>
                <TiTickOutline />
                <TiTimes
                  onClick={() => {
                    console.log(data_list[idx].id);
                    dispatch(deleteCardFB(data_list[idx].id));
                  }}
                  style={{ fontSize: "24px" }}
                />
              </div>
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
  overflow-x: hidden;
  overflow-y: auto;
  height: 71vh;
`;
const Card = styled.div`
  border: 2px solid #d4d9e5;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
  position: relative;
  & div {
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
