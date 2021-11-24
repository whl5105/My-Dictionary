// card.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// ---- Actions ----
const LOAD = "card/LOAD";
const CREATE = "card/CREATE";
const DELETE = "card/DELETE";

//---- 초기값 -----
const initialState = {
  card: [],
};

// ----- Action Creators ----
// loadCard 모든 카드의 리스트를 다 가지고 있어야 합니다
export function loadCard(card_list) {
  return { type: LOAD, card_list };
}
export function createCard(card) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, card };
}
export function deleteCard(card_index) {
  console.log("액션을 지울거야!" + card_index);
  return { type: DELETE, card_index };
}

// 미들웨어 함수 만들기
//middlewares
export const loadCardFB = () => {
  //리덕스 청크는 함수를 리턴 합니다
  // 인자로 dispatch 를받아온다 , dispatch를 받아와서 액션을 일으킵니다
  return async function (dispatch) {
    // 데이터 가져와보기 (비동기통신)
    const card_data = await getDocs(collection(db, "card"));
    // console.log(card_data);

    // card_data 데이를 배열로 바꾸기
    let card_list = [];
    card_data.forEach((c) => {
      // 데이터 확인
      // console.log(c.data());
      // card_list 배열 안에 딕셔너리 형태의 데이터 넣기
      card_list.push({ id: c.id, ...c.data() });
    });
    // console.log(card_list);

    dispatch(loadCard(card_list));
  };
};
// 추가
export const createCardFB = (card) => {
  return async function (dispatch) {
    // 어느 컬랙션에 넣어줄것인가(어떤 파이어스토어,컬랙션 이름,받아오는 데이터)
    //card : addpage에서 버튼을 클릭했을때 받아오는 dispatch 내용
    const docRef = await addDoc(collection(db, "card"), card);
    // data는  doc의 참조값이다. getDoc 으로 데이터 확인
    // console.log(docRef.id, docRef.data());
    console.log((await getDoc(docRef)).data());
    // 리덕스에 넣어주기
    const _card = await getDoc(docRef);
    const card_data = { id: _card.id, ..._card.data() };
    console.log(card_data);
    // 추가하기
    dispatch(createCard(card_data));
  };
};
//삭제
// 지울 아이디 받아오가
export const deleteCardFB = (card_id) => {
  // dispatch,getState
  return async function (dispatch, getState) {
    //조건 ) 받아온 아이디가 없을 경우
    if (!card_id) {
      window.alert("아이디가 없네요");
      return;
    }
    // 어떤걸 지울것인가
    const docRef = doc(db, "card", card_id);
    await deleteDoc(docRef);
    console.log(card_id);
    // 리스크 정보 긁어오기
    const _card_list = getState().card.card;
    console.log(_card_list);
    // 조건 ) 리스트 정보에서 파라미터로 받아온 id와 같은게 있는가
    const card_index = _card_list.findIndex((c) => {
      console.log(c.id === card_id);
      return c.id === card_id;
    });
    console.log(card_index);
    // 지우기
    dispatch(deleteCard(card_index));
  };
};

// ---- Reducer -----
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "card/LOAD": {
      console.log(action.card_list);
      return { card: action.card_list };
    }

    case "card/CREATE": {
      console.log("이제 값을 바꿀거야!");
      let new_card_list = [...state.card, action.card];
      return { card: new_card_list };
    }
    case "card/DELETE": {
      console.log("이제 값을 지울거야!");

      const new_card_list = state.card.filter((l, idx) => {
        return parseInt(action.card_index) !== idx;
      });
      console.log(new_card_list);
      return { ...state, card: new_card_list };
    }

    default:
      return state;
  }
}
