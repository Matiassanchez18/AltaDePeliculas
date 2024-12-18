import React from "react";
import Peliculas from "./Peliculas";

const ListaPeliculas = ({ arrayPeliculas, eliminadoPelicula }) => {
  return (
    <section className="mt-5  p-3">
      <article className="border fondo shadow border-start border-end">
        <div className="bg-white">
          <h2 className="text-center  p-2">Peliculas agregadas</h2>
        </div>
        <div className=" row justify-content-center">
          {arrayPeliculas.map((pelicula, posicion) => (
            <Peliculas pelicula={pelicula} key={posicion} arrayPeliculas = {arrayPeliculas} eliminadoPelicula={eliminadoPelicula}></Peliculas>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ListaPeliculas;
