import "./AllBeerSection.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";

export const AllBeerSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Fehler: ", error));
  }, []);

  return (
    <>
      <Nav />
      <main className="all-beer">
        {data.map((elm, index) => {
          return (
            <Link className="beer-container" to={`/all-beer/${elm._id}`}>
              <article key={index} className="beer-item">
                <img src={elm.image_url} alt={elm.name} />
                <h2>{elm.name}</h2>
                <h3>{elm.tagline}</h3>
                <h4>
                  Created by: <span>{elm.name}</span>
                </h4>
                <Link className="link-beer-detail" to={`/all-beer/${elm._id}`}>
                  Details
                </Link>
              </article>
            </Link>
          );
        })}
      </main>
    </>
  );
};
