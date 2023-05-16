import Pagina from "@/components/Pagina";
import Link from "next/link";
import React from "react";
import { Table } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";

const index = () => {
  return (
    <>
      <Pagina titulo="Cursos">
        <Link href="/" className="btn btn-success">
          <AiFillPlusCircle></AiFillPlusCircle> Novo
        </Link>
        <br></br>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>d</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Pagina>
    </>
  );
};

export default index;
