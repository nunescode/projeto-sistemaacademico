import Pagina from "@/components/Pagina";
import Link from "next/link";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import { BiSend, BiArrowBack } from "react-icons/bi";
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
      <Pagina titulo="Formulário">
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do curso"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="duracao">
            <Form.Label>Curso: </Form.Label>
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
    </>
  );
};

export default form;
