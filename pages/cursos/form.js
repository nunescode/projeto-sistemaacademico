import Pagina from "@/components/Pagina";
import Link from "next/link";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiSend, BiArrowBack } from "react-icons/bi";

const form = () => {
  const { register, handleSubmit } = useForm();

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
              {...register("nome")}
            />
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
              {...register("modalidade")}
            />
          </Form.Group>

          <div>
            <Button
              className="ms-2 btn btn-primary" type="submit" onClick={handleSubmit(salvar)}>
              <BiSend className="me-2"/> Salvar
            </Button>
            <Link href="/cursos" className="ms-2 btn btn-primary" type="submit">
              <BiArrowBack /> Voltar
            </Link>
          </div>
        </Form>
      </Pagina>
    </>
  );
};

export default form;
