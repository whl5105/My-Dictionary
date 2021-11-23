import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../redux/modules/Card";

const AddPage = () => {
  const history = useHistory();
  const word = React.useRef();
  const explanation = React.useRef();
  const example = React.useRef();
  const dispatch = useDispatch();

  // input 데이터 확인하기
  // window.setTimeout(() => {
  //   // 1초 뒤에는?!
  //   console.log(word.current.value);
  //   console.log(explanation.current.value);
  //   console.log(example.current.value);
  // }, 5000);

  // 추가하기
  const addCardList = () => {
    //액션객체 넣어주기
    dispatch(
      createCard({
        word: word.current.value,
        explanation: explanation.current.value,
        example: example.current.value,
      })
    );
    history.goBack();
  };
  return (
    <div>
      <h1 style={{ color: "#333" }}>Add word card</h1>
      <Card>
        <span>단어</span>
        <input type="text" placeholder="단어를 입력하세요." ref={word}></input>
      </Card>
      <Card>
        <span>설명</span>
        <input
          type="text"
          placeholder="설명을 입력하세요."
          ref={explanation}
        ></input>
      </Card>
      <Card>
        <span>예시</span>
        <input
          type="text"
          placeholder="예시를 입력하세요."
          ref={example}
        ></input>
      </Card>
      <Button onClick={addCardList}>추가하기</Button>
    </div>
  );
};
const Card = styled.div`
  background-color: #f1f2f5;
  border: none;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  & span {
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 12px;
    padding-left: 5px;
  }
  & input {
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
  }
  & input:focus {
    outline: none;
    border: 1px solid #9da2af;
  }
`;
const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  padding: 15px;
  background-color: #d4d9e5;
  cursor: pointer;
  &:hover {
    background-color: #9da2af;
    color: #fff;
    transition: 0.3s;
  }
`;
export default AddPage;
