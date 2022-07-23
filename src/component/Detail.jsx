import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordian } from "./Accordian";
import "./Detail.css";

const Detail = (props) => {
  const url = props.home;
  const [show, setShow] = useState(false);
  const [home, setHome] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.name);
      setHome(response.data);
    });
  }, [url]);
  return (
    <>
      <div className="row">
        <div className="box">
          <div className="name">
            <span>Name</span>
            <br></br>
            {props.name}
          </div>
          <div className="height">
            <span>Height</span>
            <br></br>
            {props.height}
          </div>
          <div className="birth">
            <span>Birth Year</span>
            <br></br>
            {props.birth}
          </div>
          <div className="gender">
            <span>Gender</span>
            <br></br>
            {props.gender}
          </div>
          <div className="skin">
            <span>Color</span>
            <br></br>
            {props.skin}
          </div>
          <button className="button" onClick={() => setShow(!show)}>
            {!show ? `View Details` : `Hide Details`}
          </button>
        </div>
        {show && (
          <div className="acordian">
            <Accordian home={home} birth={props.birth} gender={props.gender} />
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
