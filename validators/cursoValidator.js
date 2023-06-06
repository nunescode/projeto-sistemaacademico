const cursoValidator = {
  nome: {
    required: "Campo obrigatório!",
    minLength: {
      value: 3,
      message: "Mínimo: 3 caracteres!",
    },
    maxLength: {
      value: 30,
      message: "Máximo: 30 caracteres!",
    },
  },
  duracao: {
    required: "Campo obrigatório!",
    minLength: {
      value: 1,
      message: "Mínimo: 1 caractere!",
    },
    maxLength: {
      value: 2,
      message: "Máximo: 2 caracteres!",
    },
  },
  modalidade: {
    required: "Campo obrigatório!",
    minLength: {
      value: 3,
      message: "Mínimo: 3 caracteres!",
    },
    maxLength: {
      value: 10,
      message: "Máximo: 10 caracteres!",
    },
  },
};

export default cursoValidator;
