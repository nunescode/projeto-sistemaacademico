const salaValidator = {

  nome: {
    required: "Campo obrigatório!",
    minLength: {
      value: 2,
      message: "Mínimo: 2 caracteres!",
    },
    maxLength: {
      value: 20,
      message: "Máximo: 20 caracteres!",
    },
  },

  capacidade: {
    minLength: {
      value: 1,
      message: "Mínimo: 1 caracteres!",
    },
    maxLength: {
      value: 4,
      message: "Máximo: 4 caracteres!",
    },
    pattern: {
      value: /^[0-9]+$/,
      message: "Digite apenas números!",
    },
  },

  tipo: {
    required: 'Campo Obrigatório!',
    minLength: {
      value: 1,
      message: "Mínimo: 1 caracteres!",
    },
    maxLength: {
      value: 10,
      message: "Máximo: 10 caracteres!",
    },
  },
};

export default salaValidator;
