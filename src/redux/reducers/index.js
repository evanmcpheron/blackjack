import { combineReducers } from "redux";
import game from "./game";
import alerts from "./alerts";
import players from "./player";

export default combineReducers({ game, players, alerts });
