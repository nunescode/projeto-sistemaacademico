import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { CgProfile } from 'react-icons/cg'

import styles from "../styles/Cabecalho.module.css"

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Cabecalho = () => {
  return (
    <>
      <Navbar className={`${styles.navbar} ${styles.navbarbrand}`} variant="dark">
        <Container>
          <div>
          <Image className={styles.logo} src='https://infoenem.com.br/wp-content/uploads/2016/12/iesb.jpg'></Image>
          <Navbar.Brand href="/cursos">Pagina Inicial</Navbar.Brand>
          </div>
          <div className="m-auto">
          <Nav className="text-center">
            <Nav.Link className={styles.navlink} href="/cursos">Cursos</Nav.Link>
            <Nav.Link className={styles.navlink} href="/disciplinas">Disciplinas</Nav.Link>
            <Nav.Link className={styles.navlink} href="/alunos">Alunos</Nav.Link>
            <Nav.Link className={styles.navlink} href="/professores">Professores</Nav.Link>
            <Nav.Link className={styles.navlink} href="/salas">Salas</Nav.Link>
            <Nav.Link className={styles.navlink} href="/semestres">Semestres</Nav.Link>
              <Link href="/perfil" className={styles.link}>
                <CgProfile className={styles.prof}/>
              </Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Cabecalho;
