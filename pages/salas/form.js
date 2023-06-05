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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { push } = useRouter();

  function salvar(dados) {
    console.log(dados);
    axios.post("/api/salas", dados);
    push("/salas");
  }

  return (
    <>
      <div className={styles.cover}>
        <Pagina titulo="Salas">
          <Form>
            <Form.Group className="mb-3 text-white" controlId="nome">
              <Form.Label>
                <strong>Nome: </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome da sala:"
                {...register("nome", { required: true })}
              />
              {errors.nome && (
                <span className="error-message bg-danger text-white">
                  Campo obrigatório!
                </span>
              )}
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="capacidade">
              <Form.Label>
                <strong>Capacidade: </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira a capacidade da sala:"
                {...register("capacidade")}
              />
            </Form.Group>

            <Form.Group className="mb-3 text-white" controlId="tipo">
              <Form.Label>
                <strong>Tipo: </strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o tipo da sala:"
                {...register("tipo", { required: true })}
              />
              {errors.tipo && (
                <span className="error-message bg-danger text-white">
                  Campo obrigatório!
                </span>
              )}
            </Form.Group>

            <div className="text-center">
              <Button
                className="ms-2 btn btn-success"
                type="submit"
                onClick={handleSubmit(salvar)}
              >
                <BiSend className="me-2" /> Salvar
              </Button>
              <Link href="/salas" className="ms-2 btn btn-danger" type="submit">
                <BiArrowBack className="me-2" /> Voltar
              </Link>
            </div>
          </Form>
        </Pagina>
      </div>
    </>
  );
};

export default form;
