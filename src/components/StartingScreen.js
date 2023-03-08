import GameTable from "./GameTable";
import { connect } from "react-redux";
import Alerts from "./Alerts";

const StartingScreen = ({}) => {
  return (
    <div>
      <GameTable />
      <Alerts />
    </div>
  );
};

StartingScreen.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(StartingScreen);
