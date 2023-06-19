import React from "react";
import Pagina from "@/components/Pagina";
import alunoValidator from "@/validators/alunoValidator";
import styles from "../../styles/index.module.css";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";

import axios from "axios";
import { mask } from "remask";

const form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { push } = useRouter();

  function salvar(dados) {
    console.log(dados);
    axios.post("/api/alunos", dados);
    push("/alunos");
  }

  function handleChange(event) {
    const name = event.target.name;
    const valor = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(valor, mascara));
  }

  return (
    <>
      <div className={styles.cover}>
        <Pagina titulo="Aluno">
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3 text-white" controlId="nome">
                  <Form.Label>
                    <strong>Nome: </strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.nome}
                    type="text"
                    placeholder="Insira o nome do Aluno:"
                    {...register("nome", alunoValidator.nome)}
                  />
                  {errors.nome && (
                    <span className="error-message bg-primary text-white">
                      {errors.nome.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="cpf">
                  <Form.Label>
                    <strong>CPF: </strong>
                  </Form.Label>
                  <Form.Control
                    placeholder="Insira o CPF:"
                    isInvalid={errors.cpf}
                    mask='999.999.999-99'
                    maxLength={14}
                    type="text"
                    {...register("cpf", alunoValidator.cpf)}
                    onChange={handleChange}
                  />
                  {errors.cpf && (
                    <span className="error-message bg-primary text-white">
                      {errors.cpf.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="matricula">
                  <Form.Label>
                    <strong>Matrícula: </strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.matricula}
                    type="text"
                    placeholder="Insira a matrícula:"
                    {...register("matricula", alunoValidator.matricula)}
                  />
                  {errors.matricula && (
                    <span className="error-message bg-primary text-white">
                      {errors.matricula.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="email">
                  <Form.Label>
                    <strong>E-mail: </strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.email}
                    type="text"
                    placeholder="Insira o e-mail:"
                    {...register("email", alunoValidator.email)}
                  />
                  {errors.email && (
                    <span className="error-message bg-primary text-white">
                      {errors.email.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="telefone">
                  <Form.Label>
                    <strong>Telefone: </strong>
                  </Form.Label>
                  <Form.Control
                    placeholder="Insira o telefone:"
                    mask='(99) 99999-9999'
                    isInvalid={errors.telefone}
                    type="text"
                    {...register("telefone", alunoValidator.telefone)}
                    onChange={handleChange}
                  />
                  {errors.telefone && (
                    <span className="error-message bg-primary text-white">
                      {errors.telefone.message}
                    </span>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 text-white" controlId="cep">
                  <Form.Label>
                    <strong>CEP: </strong>
                  </Form.Label>
                  <Form.Control
                    placeholder="Insira o CEP:"
                    isInvalid={errors.cep}
                    mask='99999-999'
                    maxLength={9}
                    type="text"
                    {...register("cep", alunoValidator.cep)}
                    onChange={handleChange}
                  />
                  {errors.cep && (
                    <span className="error-message bg-primary text-white">
                      {errors.cep.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="logradouro">
                  <Form.Label>
                    <strong>Logradouro: </strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.logradouro}
                    type="text"
                    placeholder="Insira o logradouro:"
                    {...register("logradouro", alunoValidator.logradouro)}
                  />
                  {errors.logradouro && (
                    <span className="error-message bg-primary text-white">
                      {errors.logradouro.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="complemento">
                  <Form.Label>
                    <strong>Complemento: </strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.complemento}
                    type="text"
                    placeholder="Insira o complemento:"
                    {...register("complemento", alunoValidator.complemento)}
                  />
                  {errors.complemento && (
                    <span className="error-message bg-primary text-white">
                      {errors.complemento.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="numero">
                  <Form.Label>
                    <strong>Número: </strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.numero}
                    type="text"
                    placeholder="Insira o número:"
                    {...register("numero", alunoValidator.numero)}
                  />
                  {errors.numero && (
                    <span className="error-message bg-primary text-white">
                      {errors.numero.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="bairro">
                  <Form.Label>
                    <strong>Bairro: </strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.bairro}
                    type="text"
                    placeholder="Insira o bairro:"
                    {...register("bairro", alunoValidator.bairro)}
                  />
                  {errors.bairro && (
                    <span className="error-message bg-primary text-white">
                      {errors.bairro.message}
                    </span>
                  )}
                </Form.Group>
              </Col>
              <div className="text-center">
                <Button
                  className="ms-2 btn btn-success"
                  type="submit"
                  onClick={handleSubmit(salvar)}
                >
                  <BiSend className="me-2" /> Salvar
                </Button>
                <Link
                  href="/alunos"
                  className="ms-2 btn btn-danger"
                  type="submit"
                >
                  <BiArrowBack className="me-2" /> Voltar
                </Link>
              </div>
            </Row>
          </Form>
        </Pagina>
      </div>
    </>
  );
};

export default form;
