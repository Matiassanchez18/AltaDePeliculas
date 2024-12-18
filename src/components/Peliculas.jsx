import React from "react";
import { Card, Button } from "react-bootstrap";
import "../css/style.css"; 

const PeliculasAgregadas = ({ pelicula }) => {
  return (
    <div className="col-12 col-md-6 col-lg-6 mb-4 d-flex justify-content-center">
      <Card className="w-75 h-100 shadow mt-3 mb-4">
        <Card.Img
          variant="top"
          src={pelicula.Imagen} 
          className="foto"
        />
        <Card.Body>
          <Card.Title>{pelicula.Nombre}</Card.Title> 
          <Card.Text>{pelicula.Descripcion}</Card.Text> 
          <Button variant="danger" className="mt-2 shadow">Eliminar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PeliculasAgregadas;


