import { types } from "./types";
import { game } from "../../App";
import { setAlert } from "./alerts";

const { NEW_GAME, HIT, STAY } = types;

export const newGame = (type) => (dispatch) => {
  game.startNewGame(type);
  dispatch({
    type: NEW_GAME,
    payload: game,
  });
  game.message === "Game over! You are broke! Please start a new game." &&
    dispatch(setAlert(game.message));
};

export const hit = (bet) => (dispatch) => {
  game.hit(bet);
  console.log(game.message);
  dispatch({
    type: HIT,
    payload: game,
  });
  game.message && dispatch(setAlert(game.message));
};

export const stay = (bet) => (dispatch) => {
  game.stay(bet);

  dispatch({
    type: STAY,
    payload: game,
  });
  game.message && dispatch(setAlert(game.message));
};
