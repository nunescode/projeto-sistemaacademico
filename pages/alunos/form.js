import React from "react";
import Pagina from "@/components/Pagina";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button, Form } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";

import axios from "axios";
import Link from "next/link";

const form = () => {
  
  const { register, handleSubmit } = useForm();
  const { push } = useRouter();

  function salvar(dados) {
    console.log(dados);
    axios.post('/api/alunos', dados)
    push('/alunos')
  }

  return (
    <>
      <Pagina titulo="Disciplina">
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome da disciplina"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>CPF: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o CPF"
              {...register("cpf")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="matricula">
            <Form.Label>Matrícula: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a matrícula"
              {...register("matricula")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>E-mail: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o e-mail"
              {...register("email")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o telefone"
              {...register("telefone")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o CEP"
              {...register("cep")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o logradouro"
              {...register("logradouro")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="complemento">
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o complemento"
              {...register("complemento")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="numero">
            <Form.Label>Número: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o número"
              {...register("numero")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o bairro"
              {...register("bairro")}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" type="submit" onClick={handleSubmit(salvar)}>
              <BiSend className="me-2" /> Salvar
            </Button>
            <Link href="/cursos" className="ms-2 btn btn-danger" type="submit">
              <BiArrowBack className="me-2"/> Voltar
            </Link>
          </div>
          
        </Form>
      </Pagina>
    </>
  );
};

export default form;
