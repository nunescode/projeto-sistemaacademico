import Pagina from "@/components/Pagina";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

import { BiSend, BiArrowBack } from "react-icons/bi";

import Link from "next/link";
import styles from "../../styles/index.module.css"
import cursoValidator from "@/validators/cursoValidator";

const form = () => {

  const { push, query } = useRouter()
  const [ curso, setCurso ] = useState({})
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  
 
  useEffect(() => {
    
    if(query.id) {
      
      const cursos = JSON.parse(window.localStorage.getItem("cursos"))
      const curso = cursos[query.id]
      
      setValue('nome', curso.nome)
      setValue('duracao', curso.duracao)
      setValue('modalidade', curso.modalidade)

      for(let atributo in curso){
        setValue(atributo, curso[atributo])
      }
      
    }
  }, [query.id]);

  function salvar(dados) {
    console.log(dados);
    const cursos = JSON.parse(window.localStorage.getItem("cursos")) || [];
    cursos.splice(query.id, 1, dados)
    window.localStorage.setItem("cursos", JSON.stringify(cursos));
    push('/cursos')
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
              placeholder="Insira o nome do curso"
              {...register("nome", cursoValidator.nome)}
            />
            {errors.nome && (
                    <span className="error-message bg-primary text-white">
                      {errors.nome.message}
                    </span>
                  )}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="duracao">
            <Form.Label><strong>Duração: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.duracao}
              type="text"
              placeholder="Insira a duração do curso:"
              {...register("duracao", cursoValidator.duracao)}
            />
            {errors.duracao && (
                    <span className="error-message bg-primary text-white">
                      {errors.duracao.message}
                    </span>
                  )}
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="modalidade">
            <Form.Label><strong>Modalidade: </strong></Form.Label>
            <Form.Control
              isInvalid={errors.modalidade}
              type="text"
              placeholder="Insira a modalidade do curso"
              {...register("modalidade", cursoValidator.modalidade)}
            />
            {errors.modalidade && (
                    <span className="error-message bg-primary text-white">
                      {errors.modalidade.message}
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
            
            <Link href="/cursos" className="ms-2 btn btn-danger" type="submit">
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
