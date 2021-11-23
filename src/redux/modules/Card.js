// card.js

// ---- Actions ----
const CREATE = "card/CREATE";

//---- 초기값 -----
const initialState = {
  card: [
    {
      word: "Lorem",
      explanation: "Ipsum is simply dummy ",
      example: "It is a long established fact that a reader ",
    },
    {
      word: "Lorem",
      explanation: "Ipsum is simply dummy ",
      example: "It is a long established fact that a reader ",
    },
  ],
};

// ----- Action Creators ----
export function createCard(card) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, card };
}

// ---- Reducer -----
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "card/CREATE": {
      console.log("이제 값을 바꿀거야!");
      let new_card_list = [...state.card, action.card];
      return { card: new_card_list };
    }

    default:
      return state;
  }
}
