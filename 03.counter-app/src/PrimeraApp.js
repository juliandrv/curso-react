// import React from "react"; //Descomentar si aparece error
// import { Fragment } from "react";
import { PropTypes } from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
  // const saludo = 'Hola Mundo';
  // const saludo = 123;
  // const saludo = true; // Los valores booleanos no imprimen nada
  // const saludo = [1,2,'Hola',4];
  // const saludo = {
  //   nombre: 'Julián',
  //   edad: 32
  // };


  return (
    <>
      <h1>{saludo}</h1>
      {/* Muestra un objeto formateado */}
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>{subtitulo}</p>
    </>
  );
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
  subtitulo: 'Mi primera app React'
}

export default PrimeraApp;