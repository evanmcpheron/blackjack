import { types } from "../actions/types";
const { ADD_PLAYER, GET_SCORE, HIT } = types;

const initialState = {
  loadingPlayer: true,
  players: [{ id: 1, playerName: "", isDealer: false, cards: [], score: 0 }],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
