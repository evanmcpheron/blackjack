import { v4 as uuidv4 } from "uuid";
import { types } from "../actions/types";
import { game } from "../../App";
import { newGame } from "./game";

const { SET_ALERT, REMOVE_ALERT } = types;

export const setAlert =
  (msg, alertType, timeout = 6000) =>
  (dispatch) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });

    setTimeout(() => {
      switch (game.message) {
        case "You can't bet more than you have.":
        case "Please place bet.":
          return;
        default:
          dispatch(
            newGame(
              game.message ===
                "Game over! You are broke! Please start a new game."
                ? "new"
                : "continue"
            )
          );
      }
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, timeout);
  };
