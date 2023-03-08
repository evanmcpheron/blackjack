import { types } from "../actions/types";
const { NEW_GAME, HIT, STAY } = types;

const initialState = {
  new: true,
  deck: [],
  dealer: null,
  player: null,
  wallet: 0,
  currentBet: null,
  gameOver: false,
  message: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
    case HIT:
    case STAY:
      return {
        ...state,
        deck: action.payload.deck,
        dealer: action.payload.dealer,
        player: action.payload.player,
        wallet: action.payload.wallet,
        currentBet: action.payload.currentBet,
        gameOver: action.payload.gameOver,
        message: action.payload.message,
        new: false,
      };
    default:
      return state;
  }
}
