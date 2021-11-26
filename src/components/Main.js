import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { loadCardFB, deleteCardFB } from "../redux/modules/Card";
// --- ICON ----
import { TiPencil, TiTimes } from "react-icons/ti";
import Fab from "@mui/material/Fab";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data_list = useSelector((state) => state.card.card);

  React.useEffect(() => {
    dispatch(loadCardFB());
  }, []);

  return (
    <>
      <h1 style={{ color: "#333", textAlign: "center" }}>영어 사전</h1>
      <Cardbox>
        {data_list.map((c, idx) => {
          return (
            <Card key={idx}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* <span>단어</span> */}
                <p style={{ fontSize: "20px" }}>{c.word}</p>
                <div
                  style={{
                    color: "#d4d9e5",
                    fontSize: "30px",
                    cursor: "pointer",
                    display: "flex",
                  }}
                >
                  <TiPencil
                    onClick={() => {
                      history.push("/AddPage/" + idx);
                    }}
                  />
                  <TiTimes
                    style={{ paddingLeft: "5px" }}
                    onClick={() => {
                      dispatch(deleteCardFB(data_list[idx].id));
                    }}
                  />
                </div>
              </div>
              <div>
                <span>설명</span>
                <p style={{ color: "#555" }}>{c.explanation}</p>
              </div>
              <div>
                <span>예시</span>
                <p style={{ color: "#5555d9" }}>{c.example}</p>
              </div>
            </Card>
          );
        })}
      </Cardbox>
      <Fab
        color="primary"
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          fontSize: "30px",
        }}
        onClick={() => {
          history.push("/AddPage");
        }}
      >
        +
      </Fab>
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
  box-sizing: border-box;
  min-width: 300px;
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
    font-size: 14px;
  }
`;

export default Main;
