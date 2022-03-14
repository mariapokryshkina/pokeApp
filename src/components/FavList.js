import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import PokeCard from "./PokeCard";

const FavList = ({ favHandler, favourites, removeFav }) => {
  let navigate = useNavigate();

  const clearHandler = () => {
    localStorage.clear();
    removeFav([]);
  };
  return (
    <div>
      <Container>
        {favourites.length <= 0 ? (
          <div>
            {" "}
            <p>No favorites yet, add some</p>
            <Button variant="secondary" onClick={() => navigate("/pokelist")}>
              Back to Pokelist
            </Button>
          </div>
        ) : (
          <>
            <Row
              xs={2}
              md={4}
              lg={5}
              className="justify-content-evenly my-5 d-flex gap-3"
            >
              {favourites.map((pokemon) => (
                <PokeCard
                  key={pokemon.name}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  pokemonName={pokemon.name}
                  fav={favourites.some((item) => item.name === pokemon.name)}
                  favClick={() => favHandler(pokemon)}
                  type={pokemon.types[0].type.name}
                />
              ))}
            </Row>

            <Container>
              <Row>
                <Button variant="secondary" size="lg" onClick={clearHandler}>
                  Remove all favourites
                </Button>
              </Row>
            </Container>
          </>
        )}
      </Container>
    </div>
  );
};

export default FavList;
