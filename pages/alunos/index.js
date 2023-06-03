import Pagina from "@/components/Pagina";
import React, { useEffect, useState } from "react";

import { Button, Table } from "react-bootstrap";

import { AiFillPlusCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";

import axios from "axios";
import Link from "next/link";
import styles from "../../styles/index.module.css"

const index = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    getAll()
  }, []);

  function getAll(){
      axios.get('/api/alunos').then(resultado => {
        setAlunos(resultado.data);
    })
  }

  function excluir(id) {
      if(confirm('Deseja realmente excluir?')) {
        axios.delete('/api/alunos/' + id)
        getAll()
    }
  }

  return (
    <>
      <Pagina titulo="Alunos">
        <Link href="/alunos/form" className="btn btn-success">
          <AiFillPlusCircle /> Adicionar Aluno
        </Link>
        <br></br>
        <br></br>
        <Table className={styles.tableestilizada} striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Alunos</th>
              <th>Matrícula</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/alunos/' + item.id}> </Link>
                  <Button className='btn btn-secondary me-2' href={'/alunos/' + item.id}>
                    <BsPencilFill title="Alterar"/> </Button> 
                  <Button className='btn btn-danger'><BiTrash onClick={() => excluir(item.id)}/> </Button>
                </td>
                <td>{item.nome}</td>
                <td>{item.matricula}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  );
};

export default index