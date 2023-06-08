import React, { useEffect } from "react";

import Pagina from "@/components/Pagina";
import salaValidator from "@/validators/salaValidator";
import styles from "../../styles/index.module.css"

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Button, Form } from "react-bootstrap";

import { BiSend, BiArrowBack } from "react-icons/bi";

import Link from "next/link";
import axios from "axios";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  
  useEffect(() => {
    if(query.id) {
      
      axios.get('/api/salas/' + query.id).then(resultado => {
        console.log(resultado.data);
          
        const sala = resultado.data
          
          for(let atributo in sala) {
            setValue(atributo, sala[atributo])
          }
      })
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put('/api/salas/' + query.id, dados)
    push('/salas')
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
              placeholder="Insira o nome da sala"
              {...register("nome", salaValidator.nome)}
            />
            {errors.nome && (
                <span className="error-message bg-danger text-white">
                  {errors.nome.message}
                </span>
              )}
          </Form.Group>
          
          <Form.Group className="mb-3 text-white" controlId="capacidade">
            <Form.Label><strong>Capacidade: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.capacidade}
              type="text"
              placeholder="Insira a capacidade da sala"
              {...register("capacidade", salaValidator.capacidade)}
            />
            {errors.capacidade && (
                <span className="error-message bg-danger text-white">
                  {errors.capacidade.message}
                </span>
              )}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="tipo">
            <Form.Label><strong>Tipo: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.tipo}
              type="text"
              placeholder="Insira o tipo da sala"
              {...register("tipo", salaValidator.tipo)}
            />
            {errors.tipo && (
                <span className="error-message bg-danger text-white">
                  {errors.tipo.message}
                </span>
              )}
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" 
              type="submit" 
              onClick={handleSubmit(salvar)}>
              <BiSend className="me-2"/> Salvar
            </Button>
            <Link href="/salas" className="ms-2 btn btn-danger" type="submit">
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
