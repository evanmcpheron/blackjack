import React from "react";
import "../style/Card.scss";

const Cards = ({ card }) => {
  const { number, suit } = card;
  return (
    <div className={"card-container"}>
      <div className={` flip-card`}>
        <div className="flip-card-front">
          <img
            src={
              !number
                ? `https://mickey-fitness.s3.us-west-1.amazonaws.com/cards/BACK.svg`
                : `https://mickey-fitness.s3.us-west-1.amazonaws.com/cards/${number}${suit}.svg`
            }
            alt={`${number}${suit} card`}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
