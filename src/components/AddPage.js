import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createCardFB ,updateCardFB} from "../redux/modules/Card";
// ---- ICON ----
import Button from "@mui/material/Button";

const AddPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const word = React.useRef();
  const explanation = React.useRef();
  const example = React.useRef();

  const data_list = useSelector((state) => state.card.card);
  const changeValue = data_list.[params.idx];

  // ---- 추가 버튼 클릭 ----
  function addCardList() {
    let list = {
      word: word.current.value,
      explanation: explanation.current.value,
      example: example.current.value,
    };
  
    //---- 입력조건 (입력값 3개 모두 내용이 있을경우 dispatch ,앞뒤 공백 검사) ----
    if(list.word === "" && list.explanation ===""&& list.example === ""){
      alert("내용을 모두 입력해주세요")
    }else{
      let gom = list.word.replace(/^\s+|\s+$/gm, "");
      let gom2 = list.explanation.replace(/^\s+|\s+$/gm, "");
      let gom3 = list.example.replace(/^\s+|\s+$/gm, "");
      if(gom === "" || gom2==="" || gom3 === ""){
        alert("내용을 모두 입력해주세요")
      }else{
        dispatch(
          createCardFB({
            word: word.current.value,
            explanation: explanation.current.value,
            example: example.current.value,
          })
        );
        history.goBack();
      }
    }
  }
  //---- 수정 버튼 클릭 ---- 
  function updateCardList() {
    dispatch(
      updateCardFB({
        word: word.current.value,
        explanation: explanation.current.value,
        example: example.current.value,
      },changeValue.id)
    );
    history.goBack()
  }

  return (
    <div>
      {params.idx ? (
        <h1 style={{ color: "#333" , textAlign: "center" } }>수정하기</h1>
      ) : (
        <h1 style={{ color: "#333" , textAlign: "center" }}>추가하기</h1>
      )}
      <Card>
        <span>단어</span>
        {params.idx ? (
          <input type="text" ref={word} defaultValue={changeValue.word}></input>
        ) : (
          <input
            type="text"
            placeholder="단어를 입력하세요."
            ref={word}
          ></input>
        )}
      </Card>
      <Card>
        <span>설명</span>
        {params.idx ? (
          <input
            type="text"
            ref={explanation}
            defaultValue={changeValue.explanation}
          ></input>
        ) : (
          <input
            type="text"
            placeholder="설명을 입력하세요."
            ref={explanation}
          ></input>
        )}
      </Card>
      <Card>
        <span>예시</span>
        {params.idx ? (
          <input
            type="text"
            ref={example}
            defaultValue={changeValue.example}
          ></input>
        ) : (
          <input
            type="text"
            placeholder="예시를 입력하세요."
            ref={example}
          ></input>
        )}
      </Card>
      {params.idx ? (
        <Button
          style={{ width: "100%", marginBottom: "10px", padding: "10px 0" }}
          variant="contained"
          onClick={updateCardList}
        >
          수정
        </Button>
      ) : (
        <Button
          style={{ width: "100%", marginBottom: "10px", padding: "10px 0" }}
          variant="contained"
          onClick={addCardList}
        >
          추가
        </Button>
      )}

      <Button
        style={{ width: "100%", padding: "10px 0" }}
        variant="outlined"
        onClick={() => {
          history.goBack();
        }}
      >
        취소
      </Button>
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
  min-width: 250px;
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

export default AddPage;
