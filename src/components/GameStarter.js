import { Button, ButtonGroup, FormGroup } from "@mui/material";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { newGame } from "../redux/actions/game";

const GameStarter = ({ newGame, game }) => {
  const start = () => {
    newGame(game.new ? "new" : "continue");
  };

  return (
    <div className={"add-player-container"}>
      <div className={"center"}>
        <FormGroup>
          <ButtonGroup>
            <Button variant="contained" onClick={() => start()}>
              {game.new ? "Start Game" : "Continue"}
            </Button>
          </ButtonGroup>
        </FormGroup>
      </div>
    </div>
  );
};

GameStarter.propTypes = {
  newGame: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { newGame })(GameStarter);
