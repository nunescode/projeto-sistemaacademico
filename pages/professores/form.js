import React from "react";
import Pagina from "@/components/Pagina";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button, Col, Form, Row } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";

import styles from "../../styles/index.module.css"
import Link from "next/link";
import axios from "axios";

const form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { push } = useRouter();

  function salvar(dados) {
    axios.post("/api/professores", dados);
    push("/professores");
  }

  return (
    <>
      <div className={styles.cover}>
        <Pagina titulo="Professor">
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3 text-white" controlId="nome">
                  <Form.Label><strong>Nome:</strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o nome:"
                    {...register("nome", { required: true })}
                  />
                  {errors.nome && (
                    <span className="error-message bg-danger text-white">
                      Campo obrigatório!
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="cpf">
                  <Form.Label><strong>CPF: </strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o CPF:"
                    {...register("cpf", { required: true })}
                  />
                  {errors.cpf && (
                    <span className="error-message bg-danger text-white">
                      Campo obrigatório!
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="matricula">
                  <Form.Label><strong>Matrícula: </strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira a matrícula:"
                    {...register("matricula")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="salario">
                  <Form.Label><strong>Salário: </strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o salário:"
                    {...register("salario")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="email">
                  <Form.Label><strong>E-mail: </strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o e-mail:"
                    {...register("email")}
                  />
                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="telefone">
                  <Form.Label><strong>Telefone: </strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o telefone:"
                    {...register("telefone")}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 text-white" controlId="cep">
                  <Form.Label><strong>CEP: </strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o CEP:"
                    {...register("cep")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="logradouro">
                  <Form.Label><strong>Logradouro: </strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o logradouro:"
                    {...register("logradouro")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="complemento">
                  <Form.Label><strong>Complemento: </strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o complemento:"
                    {...register("complemento")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="numero">
                  <Form.Label><strong>Número: </strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o número:"
                    {...register("numero")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="bairro">
                  <Form.Label><strong>Bairro: </strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o bairro:"
                    {...register("bairro")}
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    className="ms-2 mt-4 btn btn-success"
                    type="submit"
                    onClick={handleSubmit(salvar)}
                  >
                    <BiSend className="me-2" /> Salvar
                  </Button>
                  <Link
                    href="/professores"
                    className="ms-2 mt-4 btn btn-danger"
                    type="submit"
                  >
                    <BiArrowBack className="me-2" /> Voltar
                  </Link>
                </div>
              </Col>
            </Row>
          </Form>
        </Pagina>
      </div>
    </>
  );
};

export default form;
