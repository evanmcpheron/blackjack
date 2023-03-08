import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, TextField } from "@mui/material";
import Cards from "./Cards";
import { stay, hit } from "../redux/actions/game";
import { useState } from "react";

const PlayerCenter = ({ hit, stay, game }) => {
  const [betAmount, setBetAmount] = useState("");

  return (
    <div className={"player-center-container"}>
      <div className={"player-card-container"}>
        {game.player.cards.map((card, idx) => {
          return <Cards key={idx} card={card} />;
        })}
      </div>
      <div className={"player-info-container"}>
        <Button
          variant={"contained"}
          onClick={() => {
            hit(parseInt(betAmount));
            setBetAmount("");
          }}
        >
          HIT
        </Button>
        <Button
          variant={"contained"}
          onClick={() => {
            stay(parseInt(betAmount));
            setBetAmount("");
          }}
        >
          STAY
        </Button>
        <TextField
          label="Bet Amount"
          value={betAmount}
          onChange={(e) => {
            if (/[0-9]/.test(e.target.value)) {
              setBetAmount(e.target.value);
            } else {
              setBetAmount("");
            }
          }}
          variant="outlined"
        />
      </div>
    </div>
  );
};

PlayerCenter.propTypes = {
  hit: PropTypes.func.isRequired,
  stay: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { hit, stay })(PlayerCenter);
