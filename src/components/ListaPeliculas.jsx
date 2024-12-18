import React from 'react';
import Peliculas from'./Peliculas'

const ListaPeliculas = ({arrayPeliculas}) => {
    return (
        <section className='mt-5  p-3'>
            <article className='border'>
            <div className="bg-white">
          <h2 className="text-center  p-2">Peliculas agregadas</h2>
        </div>
                {
                    arrayPeliculas.map((pelicula, posicion)=>(<Peliculas pelicula = {pelicula} key ={posicion}  ></Peliculas>))
                }
                
            </article>
        </section>
    );
};

export default ListaPeliculas;