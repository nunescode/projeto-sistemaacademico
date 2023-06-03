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
  const [semestres, setSemestres] = useState([]);

  useEffect(() => {
    getAll()
  }, []);

  function getAll(){
      axios.get('/api/semestres').then(resultado => {
        setSemestres(resultado.data);
    })
  }

  function excluir(id) {
      if(confirm('Deseja realmente excluir?')) {
        axios.delete('/api/semestres/' + id)
        getAll()
    }
  }

  return (
    <>
      <Pagina titulo="Semestres">
        <Link href="/semestres/form" className="btn btn-success">
          <AiFillPlusCircle /> Adicionar Semestre
        </Link>
        <br></br>
        <br></br>
        <Table className={styles.tableestilizada} striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Semestres</th>
              <th>Data de início</th>
              <th>Data de conclusão</th>
            </tr>
          </thead>
          <tbody>
            {semestres.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/semestres/' + item.id}></Link>
                  <Button className='btn btn-secondary me-2' href={'/semestres/' + item.id}>
                    <BsPencilFill title="Alterar"/>
                    </Button> 
                  <Button className='btn btn-danger'>
                    <BiTrash onClick={() => excluir(item.id)}/>
                  </Button>
                </td>
                <td>{item.semestre}</td>
                <td>{item.datai}</td>
                <td>{item.dataf}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  );
};

export default index