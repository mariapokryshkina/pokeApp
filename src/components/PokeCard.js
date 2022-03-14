import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Heart, HeartFill } from "react-bootstrap-icons";

const PokeCard = ({ name, image, pokemonName, type, fav, favClick }) => {
  return (
    <Card className={type} bg="light" text="dark" key={name}>
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{name}</Card.Title>
        {fav ? (
          <HeartFill onClick={favClick} size="30" color="white" />
        ) : (
          <Heart onClick={favClick} size="30" color="white" />
        )}
      </Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={image} />
      </Card.Body>
      <Card.Footer className="d-grid">
        <LinkContainer to={`/${pokemonName}`}>
          <Button variant="outline-light" size="sm">
            Details
          </Button>
        </LinkContainer>
      </Card.Footer>
    </Card>
  );
};

export default PokeCard;
