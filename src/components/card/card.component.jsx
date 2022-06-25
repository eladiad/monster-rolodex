import React from "react";

import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.moster.id}?set=set2`}
        alt="monster"
      />
      <h2>{props.moster.name}</h2>
      <p>{props.moster.email}</p>
    </div>
  );
};
