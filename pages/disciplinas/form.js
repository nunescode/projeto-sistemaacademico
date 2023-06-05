import React from "react";
import Pagina from "@/components/Pagina";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button, Form } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";

import styles from "../../styles/index.module.css"
import axios from "axios";
import Link from "next/link";

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
    <div className={styles.cover}>
      <Pagina titulo="Disciplina">
        <Form>
          <Form.Group className="mb-3 text-white" controlId="nome">
            <Form.Label><strong>Nome: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome da disciplina:"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="curso">
            <Form.Label><strong>Curso: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do curso:"
              {...register("curso")}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" type="submit" onClick={handleSubmit(salvar)}>
              <BiSend className="me-2" /> Salvar
            </Button>
            <Link href="/disciplinas" className="ms-2 btn btn-danger" type="submit">
              <BiArrowBack className="me-2"/> Voltar
            </Link>
          </div>
        </Form>
      </Pagina>
    </div>
    </>
  );
};

export default form;
