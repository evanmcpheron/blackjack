import { Provider } from "react-redux";
import { Game } from "./helpers/Game";
import StartingScreen from "./components/StartingScreen";
import store from "./store";

export const game = new Game();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <StartingScreen />
      </div>
    </Provider>
  );
}

export default App;
