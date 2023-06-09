import "./BeerDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "./Nav";
import { BackBtn } from "./BackBtn";

export const BeerDetails = () => {
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("Fehler: ", error));
  }, []);

  return (
    <>
      <Nav />
      <main className="beer-details">
        <img src={product.image_url} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <h3>{product.tagline}</h3>
          <h3>
            <span>First brewed: </span> {product.first_brewed}
          </h3>
          <h3>
            <span>Attenation level: </span> {product.attenuation_level}
          </h3>
          <h3>{product.description}</h3>
          <h3>{product.contributed_by}</h3>
          <BackBtn />
        </div>
      </main>
    </>
  );
};
