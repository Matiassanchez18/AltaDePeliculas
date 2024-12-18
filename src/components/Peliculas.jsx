import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../css/style.css"; // Si tienes estilos personalizados

const PeliculasAgregadas = () => {
  return (
   <div className="col-12 col-md-6 col-lg-6 mb-4 d-flex justify-content-center">
      <Card className="w-75 h-100 shadow mt-3 mb-4">
        <Card.Img
          variant="top"
          src="https://hips.hearstapps.com/es.h-cdn.co/crfes/images/ninos/ocio/peliculas-para-ver-en-familia/brave-indomable/3633391-1-esl-ES/Brave-Indomable.jpg?resize=980:*"
          className="foto"
          
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </Card.Text>
          <Button variant="danger" className="mt-2 shadow">Eliminar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PeliculasAgregadas;

