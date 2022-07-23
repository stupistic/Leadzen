import React from "react";
import "./Accordian.css";

export const Accordian = ({ home }) => {
  return (
    <div className="accordian">
      <div>
        <span>Description of the Character</span>
        <br></br>
        <div className="data">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse
          maxime quidem quis consequuntur! Mollitia, molestiae magnam
          consectetur distinctio illo excepturi tenetur culpa. Quis qui,
          doloribus adipisci architecto delectus in?
        </div>
      </div>
      <div className="content">
        <div className="left">
          <div>
            <span>Name of Plannet</span>
            <br></br>
            {home.name}
          </div>
          <div>
            <span>Climate</span>
            <br></br>
            {home.climate}
          </div>
        </div>
        <div className="left">
          <div>
            <span>Terrain</span>
            <br></br>
            {home.terrain}
          </div>
          <div>
            <span>Population</span>
            <br></br>
            {home.population}
          </div>
        </div>
      </div>
    </div>
  );
};
