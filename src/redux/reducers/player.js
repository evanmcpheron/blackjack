import { types } from "../actions/types";
const { ADD_PLAYER, GET_SCORE, HIT } = types;

const initialState = {
  loadingPlayer: true,
  players: [{ id: 1, playerName: "", isDealer: false, hand: [], score: 0 }],
};

export default function (state = initialState, action) {
  if (action.type === "HIT") {
  }
  switch (action.type) {
    default:
      return state;
  }
}
