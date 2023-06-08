import Pagina from "@/components/Pagina";
import cursoValidator from "@/validators/cursoValidator";

import React from "react";

import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { BiSend, BiArrowBack } from "react-icons/bi";

import Link from "next/link";
import styles from '../../styles/index.module.css'

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
    <div className={styles.cover}>
      <Pagina titulo="Formulário">
        <Form className='text-white'>
          <Form.Group className="mb-3 text-white" controlId="nome">
            <Form.Label><strong>Nome: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.nome}
              type="text"
              placeholder="Insira o nome do curso"
              {...register("nome", cursoValidator.nome)}
            />
            {errors.nome && <span className="error-message bg-primary text-white">{errors.nome.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="duracao">
            <Form.Label><strong>Duração:</strong></Form.Label>
            <Form.Control
              isInvalid={errors.duracao}
              type="text"
              placeholder="Insira a duração do curso"
              {...register("duracao", cursoValidator.duracao)}
              />
              {errors.duracao && <span className="error-message bg-primary text-white">{errors.duracao.message}</span>}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="modalidade">
            <Form.Label><strong>Modalidade:</strong></Form.Label>
            <Form.Control
              isInvalid={errors.modalidade}
              type="text"
              placeholder="Insira a modalidade do curso"
              {...register("modalidade", cursoValidator.modalidade)}
              />
            {errors.modalidade && <span className="error-message bg-primary text-white">{errors.modalidade.message}</span>}
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" type="submit" onClick={handleSubmit(salvar)}>
              <BiSend className="me-2"/><strong>Salvar</strong>
            </Button>
            <Link href="/cursos" className="ms-2 btn btn-danger" type="submit">
              <BiArrowBack/><strong>Voltar</strong>
            </Link>
          </div>
        </Form>
      </Pagina>
    </div>
    </>
  );
};

export default form;
