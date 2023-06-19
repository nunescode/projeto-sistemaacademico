import React from "react";
import Pagina from "@/components/Pagina";
import semestreValidator from "@/validators/semestreValidator";

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
          <Form.Group className="mb-3 text-white" controlId="nome">
            <Form.Label><strong>Semestre: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o período:"
              {...register("nome", semestreValidator.nome)}
            />
            {errors.nome && (
            <span className="error-message bg-primary text-white">
              {errors.nome.message}
            </span>
            )}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="datai">
            <Form.Label><strong>Data de Início: </strong></Form.Label>
            <Form.Control
              type="date"
              placeholder="Insira a data de início:"
              {...register("datai", semestreValidator.datainicio )}
            />
            {errors.datainicio && (
            <span className="error-message bg-primary text-white">
              {errors.datainicio.message}
            </span>
            )}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="dataf">
            <Form.Label><strong>Data de conclusão: </strong></Form.Label>
            <Form.Control
              type="date"
              placeholder="Insira a data de conclusão:"
              {...register("dataf", semestreValidator.datafim)}
            />
            {errors.datafim && (
              <span className="error-message bg-danger text-white">
                {errors.datafim.message}
            </span>
            )}
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
