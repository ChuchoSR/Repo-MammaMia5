import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "../assets/css/CardPizza.css";

const CardPizza = ({ name, ingredients, price, img, desc}) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={img} alt={`Imagen de ${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ color: '#333333' }}>{desc}</Card.Text>
        <Card.Text>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text style={{ fontWeight: 'bold' }}>${price}</Card.Text>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="light">Ver Más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
