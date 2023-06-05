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
      
      axios.get('/api/disciplinas/' + query.id).then(resultado => {
        console.log(resultado.data);
          
        const disciplina = resultado.data
          
          for(let atributo in disciplina) {
            setValue(atributo, disciplina[atributo])
          }
      })
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put('/api/disciplinas/' + query.id, dados)
    push('/disciplinas')
  }

  return (
    <>
    <div className={styles.cover}>
      <Pagina titulo="Formulário">
        <Form>
          <Form.Group className="mb-3 text-white" controlId="nome">
            <Form.Label><strong>Nome: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do curso"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="duracao">
            <Form.Label><strong>Curso: </strong></Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a modalidade"
              {...register("curso")}
              />
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" 
              type="submit" 
              onClick={handleSubmit(salvar)}>
              <BiSend className="me-2"/> Salvar
            </Button>
            
            <Link href="/disciplinas" className="ms-2 btn btn-danger" type="submit">
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
