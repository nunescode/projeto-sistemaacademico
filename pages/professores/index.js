import Pagina from "@/components/Pagina";
import React, { useEffect, useState } from "react";

import { Button, Table } from "react-bootstrap";

import { AiFillPlusCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";

import Link from "next/link";
import axios from "axios";
import styles from "../../styles/index.module.css"

const index = () => {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    getAll()
  }, []);

  function getAll(){
      axios.get('/api/professores').then(resultado => {
        setProfessores(resultado.data);
    })
  }

  function excluir(id) {
      if(confirm('Deseja realmente excluir?')) {
        axios.delete('/api/professores/' + id)
        getAll()
    }
  }

  return (
    <>
      <Pagina titulo="Professores">
        <Link href="/professores/form" className="btn btn-success">
          <AiFillPlusCircle /> Adicionar professor
        </Link>
        <br></br>
        <br></br>
        <Table className={styles.tableestilizada} striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Professores</th>
              <th>E-mail</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {professores.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/professores/' + item.id}></Link>
                  <Button className='btn btn-secondary me-2' href={'/professores/' + item.id}>
                    <BsPencilFill title="Alterar"/>
                    </Button> 
                  <Button className='btn btn-danger'>
                    <BiTrash onClick={() => excluir(item.id)}/>
                    </Button>
                </td>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  );
};

export default index