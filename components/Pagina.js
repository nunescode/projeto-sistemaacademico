import React from "react";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";

import styles from '../styles/Pagina.module.css'

const Pagina = (props) => {
  return (
    <>
      <Cabecalho />
      <div className={styles.pagina}>
        <h3 className={styles.titulo}>{props.titulo}</h3>
      </div>
      <br></br>

      <Container>{props.children}</Container>
      <Container />
    </>
  );
};

export default Pagina;
