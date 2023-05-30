import React from "react";
import Pagina from "@/components/Pagina";

import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button, Form } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";

import axios from "axios";

const form = () => {
  
  const { register, handleSubmit } = useForm();
  const { push } = useRouter();

  function salvar(dados) {
    console.log(dados);

    axios.post('/api/disciplinas', dados)
    push('/disciplinas')
  }

  return (
    <>
      <Pagina titulo="Disciplina">
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome da disciplina"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="curso">
            <Form.Label>Curso:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do curso"
              {...register("curso")}
            />
          </Form.Group>

          <div>
            <Button
              className="ms-2 btn btn-primary" type="submit" onClick={handleSubmit(salvar)}>
              <BiSend className="me-2" /> Salvar
            </Button>
            <Link href="/cursos" className="btn btn-primary" type="submit">
              <BiArrowBack /> Voltar
            </Link>
          </div>
        </Form>
      </Pagina>
    </>
  );
};

export default form;