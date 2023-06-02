import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Button, Table } from "react-bootstrap";

import { AiFillPlusCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";

const index = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    getAll()
  }, []);

  function getAll(){
      axios.get('/api/disciplinas').then( resultado => {
        setDisciplinas(resultado.data);
    })
  }

  function excluir(id) {
      if(confirm('Deseja realmente excluir?')) {
        axios.delete('/api/disciplinas/' + id)
        getAll()
    }
  }

  return (
    <>
      <Pagina titulo="Disciplinas">
        <Link href="/disciplinas/form" className="btn btn-success">
          <AiFillPlusCircle /> Novo
        </Link>
        <br></br>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Disciplinas</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {disciplinas.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link href={'/disciplinas/' + item.id}> </Link>
                  <Button className='btn btn-secondary me-2' href={'/disciplinas/' + item.id}>
                    <BsPencilFill title="Alterar"/> </Button> 
                  <Button className='btn btn-danger'><BiTrash onClick={() => excluir(item.id)}/> </Button>
                </td>
                <td>{item.nome}</td>
                <td>{item.curso}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  );
};

export default index