import React from "react";
import Pagina from "@/components/Pagina";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button, Col, Form, Row} from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";

import Link from "next/link";
import axios from "axios";

const form = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { push } = useRouter();

  function salvar(dados) {
    axios.post('/api/professores', dados)
    push('/professores')
  }

  return (
    <>
      <Pagina titulo="Professor">
        <Form>
          <Row>
            <Col>
            
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome:"
              {...register("nome", {required: true})}
              />
            {errors.nome && <span className="error-message bg-danger text-white">Campo obrigatório!</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>CPF: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o CPF:"
              {...register("cpf", {required: true})}
              />
            {errors.cpf && <span className="error-message bg-danger text-white">Campo obrigatório!</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="matricula">
            <Form.Label>Matrícula: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a matrícula:"
              {...register("matricula")}
              />
          </Form.Group>

            
          <Form.Group className="mb-3" controlId="salario">
            <Form.Label>Salário: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o salário:"
              {...register("salario")}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>E-mail: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o e-mail:"
              {...register("email")}
              />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o telefone:"
              {...register("telefone")}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o CEP:"
              {...register("cep")}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o logradouro:"
              {...register("logradouro")}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="complemento">
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o complemento:"
              {...register("complemento")}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="numero">
            <Form.Label>Número: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o número:"
              {...register("numero")}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o bairro:"
              {...register("bairro")}
              />
          </Form.Group>
          </Col>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" type="submit" onClick={handleSubmit(salvar)}>
              <BiSend className="me-2" /> Salvar
            </Button>
            <Link href="/professores" className="ms-2 btn btn-danger" type="submit">
              <BiArrowBack className="me-2"/> Voltar
            </Link>
          </div>
          </Row>
        </Form>
    </Pagina>
    </>
  );
};

export default form;
