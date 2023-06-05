import Pagina from "@/components/Pagina";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { BiSend, BiArrowBack } from "react-icons/bi";

import styles from "../../styles/index.module.css";
import Link from "next/link";
import axios from "axios";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get("/api/alunos/" + query.id).then((resultado) => {
        console.log(resultado.data);

        const aluno = resultado.data;

        for (let atributo in aluno) {
          setValue(atributo, aluno[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put("/api/alunos/" + query.id, dados);
    push("/alunos");
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
                    type="text"
                    placeholder="Insira o nome do curso"
                    {...register("nome")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="cpf">
                  <Form.Label>
                    <strong>CPF: </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o CPF"
                    {...register("cpf")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="matricula">
                  <Form.Label>
                    <strong>Matrícula: </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira a matrícula"
                    {...register("matricula")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="email">
                  <Form.Label>
                    <strong>E-mail: </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o e-mail"
                    {...register("email")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="telefone">
                  <Form.Label>
                    <strong>Telefone: </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o telefone"
                    {...register("telefone")}
                  />
                </Form.Group>
                </Col>
                
                <Col>
                <Form.Group className="mb-3 text-white" controlId="cep">
                  <Form.Label>
                    <strong>CEP: </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o CEP"
                    {...register("cep")}
                    />
                </Form.Group>
                
                <Form.Group className="mb-3 text-white" controlId="logradouro">
                  <Form.Label>
                    <strong>Logradouro: </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o logradouro"
                    {...register("logradouro")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="complemento">
                  <Form.Label>
                    <strong>Complemento: </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o complemento"
                    {...register("complemento")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="numero">
                  <Form.Label>
                    <strong>Número: </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o número"
                    {...register("numero")}
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="bairro">
                  <Form.Label>
                    <strong>Bairro: </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira o bairro"
                    {...register("bairro")}
                  />
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
                  <BiArrowBack /> Voltar
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
