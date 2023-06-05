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
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    getAll()
  }, []);

  function getAll(){
      axios.get('/api/salas').then(resultado => {
        setSalas(resultado.data);
    })
  }

  function excluir(id) {
      if(confirm('Deseja realmente excluir?')) {
        axios.delete('/api/salas/' + id)
        getAll()
    }
  }

  return (
    <>
    <div className={styles.cover}>
      <Pagina titulo="Salas">
        <Link href="/salas/form" className="btn btn-success">
          <AiFillPlusCircle /> Adicionar Sala
        </Link>
        <br></br>
        <br></br>
        <Table className={styles.tableestilizada} striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Salas</th>
              <th>Capacidade</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {salas.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/salas/' + item.id}></Link>
                  <Button className='btn btn-secondary me-2' href={'/salas/' + item.id}>
                    <BsPencilFill title="Alterar"/>
                    </Button> 
                  <Button className='btn btn-danger'>
                    <BiTrash onClick={() => excluir(item.id)}/>
                  </Button>
                </td>
                <td>{item.nome}</td>
                <td>{item.capacidade}</td>
                <td>{item.tipo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
    </div>
    </>
  );
};

export default index