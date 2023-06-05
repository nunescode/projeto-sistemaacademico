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
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { push } = useRouter();

  function salvar(dados) {
    console.log(dados);
    axios.post('/api/semestres', dados)
    push('/semestres')
  }

  return (
    <>
    <div className={styles.cover}>
      <Pagina titulo="Semestres">
        <Form>
          <Form.Group className="mb-3 text-white" controlId="semestre">
            <Form.Label><strong>Semestre: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o período:"
              {...register("semestre", {required: true})}
            />
            {errors.semestre && <span className="error-message bg-danger text-white">Campo obrigatório!</span>}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="datai">
            <Form.Label><strong>Data de Início: </strong></Form.Label>
            <Form.Control
              type="date"
              placeholder="Insira a data de início:"
              {...register("datai", {required: true})}
            />
            {errors.datai && <span className="error-message bg-danger text-white">Campo obrigatório!</span>}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="dataf">
            <Form.Label><strong>Data de conclusão: </strong></Form.Label>
            <Form.Control
              type="date"
              placeholder="Insira a data de conclusão:"
              {...register("dataf", {required: true})}
            />
            {errors.dataf && <span className="error-message bg-danger text-white">Campo obrigatório!</span>}
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" type="submit" onClick={handleSubmit(salvar)}>
              <BiSend className="me-2"/> Salvar
            </Button>
            <Link href="/semestres" className="ms-2 btn btn-danger" type="submit">
              <BiArrowBack className="me-2"/> Voltar
            </Link>
          </div>

        </Form>
      </Pagina>
    </div>
    </>
  );
};

export default form;
