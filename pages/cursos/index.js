import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

const index = () => {


  const [cursos, setCursos] = useState([])
  
  useEffect(() => {
    setCursos(getAll())
  }, [])

    function getAll(){
      return JSON.parse(window.localStorage.getItem('cursos')) || []
    }

    function excluir(id){
        const itens = getAll()
        itens.splice(id, 1)
        window.localStorage.setItem('cursos', JSON.stringify(itens))
        setCursos(itens)
        console.log(itens)
      }



  return (
    <>
      <Pagina titulo="Cursos">
        <Link href="/cursos/form" className="btn btn-success">
          <AiFillPlusCircle/> Novo
        </Link>
        <br></br>
        <br></br>
        <Table striped bordered hover>
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
              <td><BiTrash onClick={() => excluir(i)}/></td>
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
