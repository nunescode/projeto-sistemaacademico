import Pagina from "@/components/Pagina";

import React, { useEffect, useState } from "react";

import { Button, Col, Row, Table } from "react-bootstrap";

import { AiFillPlusCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";

import Link from "next/link";
import styles from "../../styles/index.module.css"

const index = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    setCursos(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("cursos")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const itens = getAll();
      itens.splice(id, 1);
      window.localStorage.setItem("cursos", JSON.stringify(itens));
      setCursos(itens);
    }
  }

  return (
    <>
      <Pagina titulo="Cursos">
        <Link href="/cursos/form" className="btn btn-success">
          <AiFillPlusCircle /> Adicionar Curso
        </Link>
        <br></br>
        <br></br>
        <Table className={styles.tableestilizada}striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Cursos</th>
              <th>Duração</th>
              <th>Modalidade</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link href={'/cursos/' + i}> </Link>
                  <Button className='btn btn-secondary me-2' href={'/cursos/' + i}>
                    <BsPencilFill title="Alterar"/>
                    </Button> 
                  <Button className='btn btn-danger'><BiTrash onClick={() => excluir(i)}/></Button>
                </td>
                <td>{item.nome}</td>
                <td>{item.duracao}</td>
                <td>{item.modalidade}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  );
};

export default index;
