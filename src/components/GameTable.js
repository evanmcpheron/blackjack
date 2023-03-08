import Cards from "./Cards";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PlayerCenter from "./PlayerCenter";
import ScoreCard from "./ScoreCard";
import { useEffect } from "react";
import { newGame } from "../redux/actions/game";
import { Typography } from "@mui/material";

const GameTable = ({ game, newGame }) => {
  useEffect(() => {
    if (game.new) {
      newGame("new");
    }
  }, [game.new]);
  return (
    <div className={"game-table-container"}>
      <div className={"all-scores-container"}>
        <div className={"wallet-container"}>
          <Typography>wallet</Typography>
          <Typography className={"wallet"}>${game.wallet}</Typography>
        </div>
        {game.dealer && <ScoreCard score={game.dealer.count} />}
        {game.player && (
          <ScoreCard player={"player"} score={game.player.count} />
        )}
      </div>
      <div className={"dealer-container"}>
        <div className={"dealer-card-container"}>
          {game.dealer &&
            game.dealer.cards.map((card, idx) => {
              return <Cards key={idx} card={card} />;
            })}
        </div>
      </div>
      {game.player && <PlayerCenter player={game.player} />}
    </div>
  );
};

GameTable.propTypes = {
  newGame: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { newGame })(GameTable);
