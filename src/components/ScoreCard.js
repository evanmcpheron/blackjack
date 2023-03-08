import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const ScoreCard = ({ score, player = "dealer" }) => {
  return (
    <div className={"score-card-container"}>
      <Typography>{player}</Typography>
      <Typography className={"score"}>{score}</Typography>
    </div>
  );
};

ScoreCard.propTypes = {
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(ScoreCard);
