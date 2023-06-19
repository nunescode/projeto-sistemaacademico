import React, { useEffect } from "react";

import Pagina from "@/components/Pagina";
import professorValidator from "@/validators/professorValidator";
import styles from "../../styles/index.module.css";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button, Col, Form, Row } from "react-bootstrap";
import { BiSend, BiArrowBack } from "react-icons/bi";

import axios from "axios";
import Link from "next/link";
import { mask } from "remask";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get("/api/professores/" + query.id).then((resultado) => {
        console.log(resultado.data);

        const professor = resultado.data;

        for (let atributo in professor) {
          setValue(atributo, professor[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put("/api/professores/" + query.id, dados);
    push("/professores");
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
        <Pagina titulo="Formulário">
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
                    placeholder="Insira o nome do professor"
                    {...register("nome", professorValidator.nome)}
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
                    mask="999.999.999-99"
                    isInvalid={errors.cpf}
                    type="text"
                    placeholder="Insira o CPF"
                    {...register("cpf", professorValidator.cpf)}
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
                    placeholder="Insira a matrícula"
                    {...register("matricula", professorValidator.matricula)}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="salario">
                  <Form.Label>
                    <strong>Salário: </strong>
                  </Form.Label>
                  <Form.Control
                    mask="9999.99"
                    isInvalid={errors.salario}
                    type="text"
                    placeholder="Insira o salário"
                    {...register("salario", professorValidator.salario)}
                    onChange={handleChange}
                  />
                  {errors.salario && (
                    <span className="error-message bg-primary text-white">
                      {errors.salario.message}
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
                    placeholder="Insira o e-mail"
                    {...register("email", professorValidator.email)}
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
                    mask="(99) 99999-9999"
                    isInvalid={errors.telefone}
                    type="text"
                    placeholder="Insira o telefone"
                    {...register("telefone", professorValidator.telefone)}
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
                    mask="99999-999"
                    isInvalid={errors.cep}
                    type="text"
                    placeholder="Insira o CEP"
                    {...register("cep", professorValidator.cep)}
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
                    placeholder="Insira o logradouro"
                    {...register("logradouro", professorValidator.logradouro)}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="complemento">
                  <Form.Label>
                    <strong>Complemento: </strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.complemento}
                    type="text"
                    placeholder="Insira o complemento"
                    {...register("complemento", professorValidator.complemento)}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="numero">
                  <Form.Label>
                    <strong>Número: </strong>
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.numero}
                    type="text"
                    placeholder="Insira o número"
                    {...register("numero", professorValidator.numero)}
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
                    placeholder="Insira o bairro"
                    {...register("bairro", professorValidator.bairro)}
                  />
                  {errors.bairro && (
                    <span className="error-message bg-primary text-white">
                      {errors.bairro.message}
                    </span>
                  )}
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
                    <BiArrowBack /> Voltar
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
