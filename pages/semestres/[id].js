import Pagina from "@/components/Pagina";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import { BiSend, BiArrowBack } from "react-icons/bi";

import styles from "../../styles/index.module.css"
import Link from "next/link";
import axios from "axios";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()
  
  useEffect(() => {
    if(query.id) {
      
      axios.get('/api/semestres/' + query.id).then(resultado => {
        console.log(resultado.data);
          
        const semestre = resultado.data
          
          for(let atributo in semestre) {
            setValue(atributo, semestre[atributo])
          }
      })
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put('/api/semestres/' + query.id, dados)
    push('/semestres')
  }

  return (
    <>
    <div className={styles.cover}>
      <Pagina titulo="Formulário">
        <Form>
          <Form.Group className="mb-3 text-white" controlId="semestre">
            <Form.Label><strong>Semestre: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o período"
              {...register("semestre")}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="datai">
            <Form.Label><strong>Data de Início: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a data de início"
              {...register("datai")}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="dataf">
            <Form.Label><strong>Data do Fim: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a data do fim"
              {...register("dataf")}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" 
              type="submit" 
              onClick={handleSubmit(salvar)}>
              <BiSend className="me-2"/> Salvar
            </Button>

            <Link href="/semestres" className="ms-2 btn btn-danger" type="submit">
              <BiArrowBack /> Voltar
            </Link>
          </div>

        </Form>
      </Pagina>
    </div>
    </>
  );
};

export default form;
