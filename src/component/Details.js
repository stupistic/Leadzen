import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import "./Details.css";
import axios from "axios";
import { Pagination } from "./Pagination";

const Details = () => {
  const url = "https://swapi.dev/api/people";
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [postperpage] = useState(3);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPeople(response.data.results);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
      });
  }, [url]);

  const indexoflastpost = currentPage * postperpage;
  const indexoffirstpost = indexoflastpost - postperpage;
  const currentpost = people.slice(indexoffirstpost, indexoflastpost);

  console.log(people.start, people.end);

  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  return (
    <div className="container">
      {currentpost.map((item) => (
        <>
          <Detail
            name={item.name}
            height={item.height}
            birth={item.birth_year}
            gender={item.gender}
            skin={item.skin_color}
            key={item.id}
            home={item.homeworld}
          />
        </>
      ))}
      <Pagination
        postperpage={postperpage}
        totalpost={people.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Details;
