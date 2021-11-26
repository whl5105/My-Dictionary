// card.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// ---- Actions ----
const LOAD = "card/LOAD";
const CREATE = "card/CREATE";
const UPDATE = "card/UPDATE";
const DELETE = "card/DELETE";

//---- 초기값 -----
const initialState = {
  card: [],
};

// ----- Action Creators ----
export function loadCard(card_list) {
  return { type: LOAD, card_list };
}
export function createCard(card) {
  return { type: CREATE, card };
}
export function updateCard(card_index) {
  return { type: UPDATE, card_index };
}
export function deleteCard(card_index) {
  return { type: DELETE, card_index };
}

//  ---- middlewares ----
// ---- Firebase DB 조회 ----
export const loadCardFB = () => {
  return async function (dispatch) {
    // Firebase DB 조회
    const card_data = await getDocs(collection(db, "card"));

    let card_list = [];
    card_data.forEach((c) => {
      card_list.push({ id: c.id, ...c.data() });
    });
    dispatch(loadCard(card_list));
  };
};
// ---- Firebase DB 생성 ----
export const createCardFB = (card) => {
  return async function (dispatch) {
    // FireStore DB 생성
    await addDoc(collection(db, "card"), card);
  };
};
// ---- Firebase DB 수정 ----
export const updateCardFB = (card_data, card_id) => {
  return async function (dispatch, getState) {
    // FireStore DB 수정
    const docRef = doc(db, "card", card_id);
    await updateDoc(docRef, {
      word: card_data.word,
      explanation: card_data.explanation,
      example: card_data.example,
    });

    const _card_list = getState().card.card;
    const card_index = _card_list.findIndex((c) => {
      return c.id === card_id;
    });
    dispatch(updateCard(card_index));
  };
};

// ---- Firebase DB 삭제 ----
export const deleteCardFB = (card_id) => {
  return async function (dispatch, getState) {
    if (!card_id) {
      window.alert("아이디가 없네요");
      return;
    }
    // FireStore DB 삭제
    const docRef = doc(db, "card", card_id);
    await deleteDoc(docRef);

    const _card_list = getState().card.card;
    const card_index = _card_list.findIndex((c) => {
      return c.id === card_id;
    });
    dispatch(deleteCard(card_index));
  };
};

// ---- Reducer -----
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "card/LOAD": {
      return { card: action.card_list };
    }

    case "card/CREATE": {
      let new_card_list = [...state.card, action.card];
      return { card: new_card_list };
    }
    case "card/UPDATE": {
      const new_card_list = state.card.map((c, idx) => {
        if (parseInt(action.card_index) === idx) {
          return {
            ...c,
            word: c.word,
            explanation: c.explanation,
            example: c.explanation,
          };
        } else {
          return c;
        }
      });
      return { ...state, list: new_card_list };
    }
    case "card/DELETE": {
      const new_card_list = state.card.filter((l, idx) => {
        return parseInt(action.card_index) !== idx;
      });
      return { ...state, card: new_card_list };
    }

    default:
      return state;
  }
}
