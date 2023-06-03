import Pagina from "@/components/Pagina";
import React from "react";

import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { BiSend, BiArrowBack } from "react-icons/bi";

import Link from "next/link";

const form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {
    console.log(dados);
    const cursos = JSON.parse(window.localStorage.getItem("cursos")) || [];
    cursos.push(dados);
    window.localStorage.setItem("cursos", JSON.stringify(cursos));
  }

  return (
    <>
      <Pagina titulo="Formulário">
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do curso"
              {...register("nome", {required: true})}
            />
            {errors.nome && <span className="error-message bg-danger text-white">Campo obrigatório!</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="duracao">
            <Form.Label>Duração:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a duração do curso"
              {...register("duracao")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="modalidade">
            <Form.Label>Modalidade:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a modalidade do curso"
              {...register("modalidade", {required: true})}
            />
            {errors.modalidade && <span className="error-message bg-danger text-white">Campo obrigatório!</span>}
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" type="submit" onClick={handleSubmit(salvar)}>
              <BiSend className="me-2"/> Salvar
            </Button>
            <Link href="/cursos" className="ms-2 btn btn-danger" type="submit">
              <BiArrowBack /> Voltar
            </Link>
          </div>
        </Form>
      </Pagina>
    </>
  );
};

export default form;
