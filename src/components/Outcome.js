import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { newGame } from "../redux/actions/game";

const Outcome = ({ score }) => {
  if (score > 21) {
    return (
      <div>
        BUST
        <Button onClick={() => newGame("continue")} variant={"contained"}>
          Restart
        </Button>
      </div>
    );
  } else if (score === 21) {
    return (
      <div>
        YOU WIN
        <Button onClick={() => newGame("continue")} variant={"contained"}>
          Restart
        </Button>
      </div>
    );
  }
  return;
};

Outcome.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Outcome);
