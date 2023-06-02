import Pagina from "@/components/Pagina";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

import { BiSend, BiArrowBack } from "react-icons/bi";

import axios from "axios";
import Link from "next/link";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()
  
  useEffect(() => {
    if(query.id) {
      
      axios.get('/api/professores/' + query.id).then(resultado => {
        console.log(resultado.data);
          
        const professor = resultado.data
          
          for(let atributo in professor) {
            setValue(atributo, professor[atributo])
          }
      })
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put('/api/professores/' + query.id, dados)
    push('/professores')
  }

  return (
    <>
      <Pagina titulo="Formulário">
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do professor"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cpf">
            <Form.Label>CPF: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o CPF"
              {...register("cpf")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="matricula">
            <Form.Label>Matrícula: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a matrícula"
              {...register("matricula")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="salario">
            <Form.Label>Salário: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o salário"
              {...register("salario")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>E-mail: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o e-mail"
              {...register("email")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefone">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o telefone"
              {...register("telefone")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cep">
            <Form.Label>CEP: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o CEP"
              {...register("cep")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="logradouro">
            <Form.Label>Logradouro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o logradouro"
              {...register("logradouro")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="complemento">
            <Form.Label>Complemento: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o complemento"
              {...register("complemento")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="numero">
            <Form.Label>Número: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o número"
              {...register("numero")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bairro">
            <Form.Label>Bairro: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o bairro"
              {...register("bairro")}
            />
          </Form.Group>


          <div className="text-center">
            <Button
              className="ms-2 btn btn-success" 
              type="submit" 
              onClick={handleSubmit(salvar)}>
              <BiSend className="me-2"/> Salvar
            </Button>
            
            <Link href="/professores" className="ms-2 btn btn-danger" type="submit">
              <BiArrowBack /> Voltar
            </Link>
          </div>
        </Form>
      </Pagina>
    </>
  );
};

export default form;
