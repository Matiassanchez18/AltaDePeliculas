import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../css/style.css";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import ListaPeliculas from "./ListaPeliculas";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const peliculaLocalStorage =
    JSON.parse(localStorage.getItem("PeliculaKey")) || [];

  const [arrayPeliculas, setarrayPeliculas] = useState(peliculaLocalStorage);

  const enviadoForm = (data) => {
    const peliculaExistente = arrayPeliculas.some(
      (ipeliculas) => ipeliculas.Nombre === data.nombre.trim()
    );

    if (peliculaExistente) {
      alert("La película ya existe");
    } else {
      const nuevaPelicula = {
        Nombre: data.nombre.trim(),
        Descripcion: data.descripcion.trim(),
        Genero: data.genero.trim(),
        Imagen: data.imagen.trim(),
      };

      setarrayPeliculas([...arrayPeliculas, nuevaPelicula]);
      console.log([...arrayPeliculas, nuevaPelicula]);
      reset();
    }
  };

  useEffect (() => {
      console.log("desde effect"),
        localStorage.setItem("PeliculaKey", JSON.stringify(arrayPeliculas));
    },
    [arrayPeliculas]
  );

  const eliminadoPelicula = (peliculaBorrar) => {
    const peliculaEncontrada = arrayPeliculas.filter(
      (pelicula) => pelicula !== peliculaBorrar
    );
    setarrayPeliculas(peliculaEncontrada);
  };

  return (
    <section className="container">
      <article className="text-center mt-5 p-3 fondo shadow">
        <h1>Peliculas</h1>
        <p className="lead">Complete el formulario para agregar la Peliculas</p>
        <form action="" onSubmit={handleSubmit(enviadoForm)}>
          <InputGroup className=" mt-3 w-50 mx-auto">
            <Form.Control
              placeholder="Nombre de la pelicula"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
              {...register("nombre", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "El minimo de caracteres es de 3",
                },
                maxLength: {
                  value: 15,
                  message: "El maximo de caracteres permitido es de 15",
                },
              })}
            />
          </InputGroup>
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>

          <InputGroup className=" mt-3 w-50 mx-auto">
            <div className="form-floating">
              <textarea
                className="form-control textarea"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                {...register("descripcion", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El minimo de caracteres es de 3",
                  },
                  maxLength: {
                    value: 250,
                    message: "El maximo de caracteres permitido es de 250",
                  },
                })}
              ></textarea>
              <label>Descripcion de la pelicula</label>
            </div>
          </InputGroup>
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>

          <InputGroup className=" mt-3 w-50 mx-auto">
            <Form.Control
              placeholder="Genero"
              aria-label="genero"
              aria-describedby="basic-addon1"
              {...register("genero", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 2,
                  message: "El minimo de caracteres es de 2",
                },
                maxLength: {
                  value: 50,
                  message: "El maximo de caracteres permitido es de 50",
                },
              })}
            />
          </InputGroup>
          <Form.Text className="text-danger">
            {errors.genero?.message}
          </Form.Text>

          <InputGroup className=" mt-3 w-50 mx-auto">
            <Form.Control
              placeholder="Portada de pelicula"
              aria-label="Username"
              type="url"
              aria-describedby="basic-addon1"
              {...register("imagen", {
                required: "Este campo es obligatorio",
              })}
            />
          </InputGroup>
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
          <div className="d-flex justify-content-end me-4 mt-5 mb-4">
            <Button variant="primary" type="submit">
              Generar pelicula
            </Button>
          </div>
        </form>
      </article>

      <article>
        <ListaPeliculas
          arrayPeliculas={arrayPeliculas}
          eliminadoPelicula={eliminadoPelicula}
        ></ListaPeliculas>
      </article>
    </section>
  );
};

export default Formulario;
