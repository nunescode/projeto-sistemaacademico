import Pagina from "@/components/Pagina";
import disciplinaValidator from "@/validators/disciplinaValidator";
import styles from "../../styles/index.module.css"

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import { BiSend, BiArrowBack } from "react-icons/bi";

import Link from "next/link";
import axios from "axios";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  
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
              isInvalid={errors.nome}
              type="text"
              placeholder="Insira a disciplina:"
              {...register("nome", disciplinaValidator.nome)}
            />
            {errors.nome &&  (
              <span className="error-message bg-primary text-white">
              {errors.nome.message}
            </span>
            )}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="curso">
            <Form.Label><strong>Curso: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.curso}
              type="text"
              placeholder="Insira o curso:"
              {...register("curso", disciplinaValidator.curso)}
              />
              {errors.curso && <span className="error-message bg-primary text-white">{errors.curso.message}</span>}
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
