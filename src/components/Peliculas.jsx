import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../css/style.css"; // Si tienes estilos personalizados

const PeliculasAgregadas = () => {
  return (
    <section>
      <article>
        <div>
          <h2 className="text-center border p-2">Peliculas agregadas</h2>
        </div>
        <div className=" row justify-content-center">
          <div className="col-12 col-md-6 col-lg-6 mb-4 d-flex justify-content-center">
            <Card className="w-75 h-100">
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
                <Button variant="danger" className="mt-2">Eliminar</Button>
              </Card.Body>
            </Card>
          </div>
          
          <div className="col-12 col-md-6 col-lg-6 mb-4 d-flex justify-content-center">
            <Card className="w-75 h-100">
              <Card.Img
                variant="top"
                className="foto"
                src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/06/14/17183742816234.jpg"
                
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="danger" className="mt-2">Eliminar</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PeliculasAgregadas;

