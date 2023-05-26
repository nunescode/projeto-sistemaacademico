import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Button, Table } from "react-bootstrap";

import { AiFillPlusCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";

const index = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    
  }, []);

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
              <th>Duração</th>
              <th>Modalidade</th>
            </tr>
          </thead>
          <tbody>
            {disciplinas.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link href={'/disciplinas/' + i}> </Link>
                  <Button className='btn btn-secondary me-2' href={'/disciplinas/' + i}><BsPencilFill title="Alterar"/> </Button> 
                  <Button className='btn btn-danger'><BiTrash onClick={() => excluir(i)}/> </Button>
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
