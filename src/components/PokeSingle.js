import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Loader from "./Loader";

const PokeSingle = () => {
  let { pokemonName } = useParams();
  let navigate = useNavigate();

  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setPokemon(res.data);
        setIsLoading(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <Container>
          <Row>
            <Col className="mb-5 ">
              <h2 className="text-center text-capitalize">{pokemon.name}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="align-self-end full"
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />
            </Col>
            <Col>
              <p>
                <strong>Height:</strong> {pokemon.height * 10} cm
              </p>
              <p>
                <strong>Weight:</strong> {pokemon.weight / 10} kg
              </p>
              <strong>Type:</strong>
              <ul>
                {pokemon.types.map((item) => (
                  <li key={item.type.name}>{item.type.name}</li>
                ))}
              </ul>
              <p>
                <strong>Abilities:</strong>
              </p>
              <ul>
                {pokemon.abilities.map((item) => (
                  <li key={item.ability.name}>{item.ability.name}</li>
                ))}
              </ul>
              <Button variant="secondary" onClick={() => navigate(-1)}>
                Back to list
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default PokeSingle;
