import React from "react";
import "./Cards.css";
const Cards = (props) => {
  return (
    <div>
      <div>
        <div className="cards">
          {props.data.map((card) => (
            <div className="card">
              <div className="text">{card.text}</div>
              <div className="price">{card.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
