import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert } from "@mui/material";

const Alerts = ({ alerts, game }) => {
  return (
    game.message && (
      <div className="alert-wrapper">
        {alerts.map((alert) => (
          <div key={alert.id} className={"alert-backdrop"}>
            <Alert severity="info" className={`alert alert-${alert.alertType}`}>
              {alert.msg}
            </Alert>
          </div>
        ))}
      </div>
    )
  );
};

Alerts.propTypes = {
  alerts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
  game: state.game,
});

export default connect(mapStateToProps, {})(Alerts);
