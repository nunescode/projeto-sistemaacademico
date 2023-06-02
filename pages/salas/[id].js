import Pagina from "@/components/Pagina";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import { BiSend, BiArrowBack } from "react-icons/bi";

import Link from "next/link";
import axios from "axios";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()
  
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
      <Pagina titulo="Formulário">
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome da sala"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="capacidade">
            <Form.Label>Capacidade: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a capacidade da sala"
              {...register("capacidade")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="tipo">
            <Form.Label>Tipo: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o tipo da sala"
              {...register("tipo")}
            />
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
    </>
  );
};

export default form;
