import React from 'react';
import Peliculas from'./Peliculas'

const ListaPeliculas = () => {
    return (
        <section className='mt-5  p-3'>
            <article className='border'>
                <Peliculas></Peliculas>
            </article>
        </section>
    );
};

export default ListaPeliculas;