import Pagina from "@/components/Pagina";
import React from "react";
import { Table } from "react-bootstrap";

import styles from "../../styles/index.module.css"

const index = () => {

  const alunos = [
    {
      nomeCompleto: "Laerte N.",
      disciplina: "Governança de TI",
      nomeProfessor: "Carlos Bon",
      dia: "Sábado",
      horario: "13:30",
    },
    {
      nomeCompleto: "Rodrigo O.",
      disciplina: "BI & Data Warehousing",
      nomeProfessor: "Rodrigo Gonçalves",
      dia: "Todos os dias",
      horario: "15:00 a 18:00",
    },
    {
      nomeCompleto: "Eduardo C.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Daniel da Silva Souza",
      dia: "Terça-Feira",
      horario: "14:00",
    },
    {
      nomeCompleto: "Henrique C.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Daniel da Silva Souza",
      dia: "Segunda a Sexta",
      horario: "16:00",
    },
    {
      nomeCompleto: "João P.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Daniel da Silva Souza",
      dia: "Terça e Quarta",
      horario: "10:00",
    },
    {
      nomeCompleto: "Nyckollas P.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Daniel da Silva Souza",
      dia: "Terça-Feira",
      horario: "00:00",
    },
    {
      nomeCompleto: "Pedro H.",
      disciplina: "Manutenção de Software e DevOps",
      nomeProfessor: "Edgar Amaya",
      dia: "Quarta-Feira",
      horario: "16:00",
    },
    {
      nomeCompleto: "Rafael G.",
      disciplina: "Projeto de Interface",
      nomeProfessor: "Elias",
      dia: "Terça-Feira",
      horario: "16:00",
    },
    {
      nomeCompleto: "Igor V.",
      disciplina: "Projeto de Interface",
      nomeProfessor: "Elias",
      dia: "Sexta-Feira",
      horario: "13:00",
    },
    {
      nomeCompleto: "Luís N.",
      disciplina: "Projeto de Interface",
      nomeProfessor: "Elias",
      dia: "Quarta-Feira",
      horario: "16:00",
    },
    {
      nomeCompleto: "Marcos V.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Flavio Nery",
      dia: "Terça-Feira",
      horario: "02:00",
    },
    {
      nomeCompleto: "Emanuel A.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Michel Emerson Barros Costa",
      dia: "Segunda-Feira",
      horario: "15:00",
    },
    {
      nomeCompleto: "Victor R.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Michel Emerson Barros Costa",
      dia: "Sábado",
      horario: "09:00",
    },
    {
      nomeCompleto: "Davi M.",
      disciplina: "Construção de Frontend",
      nomeProfessor: "Orion Teles",
      dia: "Segunda-Feira",
      horario: "16:00",
    },
    {
      nomeCompleto: "Pedro H.",
      disciplina: "Construção de Frontend",
      nomeProfessor: "Orion Teles",
      dia: "Sexta-Feira",
      horario: "15:00",
    },
    {
      nomeCompleto: "Hiago M.",
      disciplina: "Construção de Frontend",
      nomeProfessor: "Orion Teles de Mesquita",
      dia: "Sábado",
      horario: "10:00",
    },
    {
      nomeCompleto: "Brenno A.",
      disciplina: "Construção de Frontend",
      nomeProfessor: "Orion Telles",
      dia: "Todos os dias",
      horario: "13:00 a 18:00",
    },
    {
      nomeCompleto: "Jean L.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Pablo",
      dia: "Quarta-Feira",
      horario: "18:00",
    },
    {
      nomeCompleto: "Laisa M.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "pablo",
      dia: "Quarta-Feira",
      horario: "16:00",
    },
    {
      nomeCompleto: "Enzo C.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Pablo",
      dia: "Todos os dias excluindo Quintas",
      horario: "15:00",
    },
    {
      nomeCompleto: "Guilherme F.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Pablo",
      dia: "Terça e Sexta",
      horario: "10:00",
    },
    {
      nomeCompleto: "Istefani F.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Pablo",
      dia: "Quarta-Feira",
      horario: "18:00",
    },
    {
      nomeCompleto: "Jade S.",
      disciplina: "Lógica de Programação",
      nomeProfessor: "Pablo coelho ferreira",
      dia: "Terça-Feira",
      horario: "09:00",
    },
    {
      nomeCompleto: "Julia B.",
      disciplina: "Banco de Dados SQL e no SQL",
      nomeProfessor: "Regiano",
      dia: "Sábado",
      horario: "09:00",
    },
    {
      nomeCompleto: "Felipe V.",
      disciplina: "Banco de Dados SQL e no SQL",
      nomeProfessor: "Rodrigo Goncalves Pinto",
      dia: "Sexta-Feira",
      horario: "10:00",
    },
    {
      nomeCompleto: "Laerth P.",
      disciplina: "Levantamento de Requisitos e Modelagem de Processos",
      nomeProfessor: "RUBENS",
      dia: "Sábado",
      horario: "10:00",
    },
    {
      nomeCompleto: "Julia B.",
      disciplina: "Levantamento de Requisitos e Modelagem de Processos",
      nomeProfessor: "Rubens",
      dia: "Sexta-Feira",
      horario: "19:15",
    },
    {
      nomeCompleto: "Aerlon G.",
      disciplina: "Projeto de Interface",
      nomeProfessor: "Elias",
      dia: "Sábado",
      horario: "10:00",
    },
    {
      nomeCompleto: "Diogo P.",
      disciplina: "Projeto de Interface",
      nomeProfessor: "Elias",
      dia: "Sábado",
      horario: "12:00",
    },
  ];

  alunos.sort((a, b) => a.nomeCompleto.localeCompare(b.nomeCompleto));

  return (
    <>
      <Pagina titulo="Monitores">
        <Table className={styles.tableestilizada} striped bordered hover>
          <thead>
            <tr>
              <th>Monitor</th>
              <th>Horário</th>
              <th>Dias Disponíveis</th>
              <th>Disciplina</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno, index) => (
              <tr key={index}>
                <td>{aluno.nomeCompleto}</td>
                <td>{aluno.horario}</td>
                <td>{aluno.dia}</td>
                <td>{aluno.disciplina}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Pagina>
    </>
  );
};

export default index;
