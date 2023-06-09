import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import "./Home.css";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const [random, setRandom] = useState([]);
  let randomArray = [];

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((res) => res.json())
      .then((data) => setRandom(data))
      .catch((error) => console.log("Fehler: ", error));
  }, []);

  random.map((item, i) => {
    randomArray.push(item._id);
  });

  return (
    <main className="home-section">
      <article>
        <img src="/img/beer-all.jpeg" alt="beer" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          natus eligendi. Facilis animi, earum pariatur adipisci mollitia et
          odio eligendi!
        </p>
        <Link className="link-beer" to="/all-beer">
          Give me all Beers!
        </Link>
      </article>
      <article>
        <img src="/img/beer-cover.jpeg" alt="beer" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fugit
          ipsum in magnam natus assumenda?
        </p>
        <Link
          className="link-beer"
          to={`/all-beer/${randomArray[Math.round(Math.random() * 24)]}`}
        >
          Some random Beer!
        </Link>
      </article>
    </main>
  );
};
