import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../styles/Cabecalho.module.css"

import "bootstrap/dist/css/bootstrap.min.css";

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/cursos">Pagina Inicial</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link className={styles.navlinkcursos} href="/cursos">Cursos</Nav.Link>
            <Nav.Link className={styles.navlinkdisciplinas} href="/disciplinas">Disciplinas</Nav.Link>
            <Nav.Link className={styles.navlinkalunos} href="/alunos">Alunos</Nav.Link>
            <Nav.Link className={styles.navlinkprofessores} href="/professores">Professores</Nav.Link>
            <Nav.Link className={styles.navlinkturmas} href="/turmas">Turmas</Nav.Link>
            <Nav.Link className={styles.navlinksalas} href="/salas">Salas</Nav.Link>
            <Nav.Link className={styles.navlinksemestres} href="/semestres">Semestres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Cabecalho;
