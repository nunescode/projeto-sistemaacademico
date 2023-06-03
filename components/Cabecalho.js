import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../styles/Cabecalho.module.css"

import "bootstrap/dist/css/bootstrap.min.css";

const Cabecalho = () => {
  return (
    <>
      <Navbar className={`${styles.navbar} ${styles.navbarbrand}`} variant="dark">
        <Container>
          <Navbar.Brand href="/cursos">Pagina Inicial</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link className={styles.navlink} href="/cursos">Cursos</Nav.Link>
            <Nav.Link className={styles.navlink} href="/disciplinas">Disciplinas</Nav.Link>
            <Nav.Link className={styles.navlink} href="/alunos">Alunos</Nav.Link>
            <Nav.Link className={styles.navlink} href="/professores">Professores</Nav.Link>
            <Nav.Link className={styles.navlink} href="/salas">Salas</Nav.Link>
            <Nav.Link className={styles.navlink} href="/semestres">Semestres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Cabecalho;
