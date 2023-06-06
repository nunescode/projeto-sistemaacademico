const disciplinaValidator = {

  nome: {
    required: "Campo obrigatório!",
    minLength: {
      value: 4,
      message: "Mínimo: 4 caracteres!",
    },
    maxLength: {
      value: 50,
      message: "Máximo: 50 caracteres!",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Digite somente letras!",
    },
  },

  curso: {
    required: "Campo obrigatório!",
    minLength: {
      value: 3,
      message: "Mínimo: 3 caracteres!",
    },
    maxLength: {
      value: 40,
      message: "Máximo: 40 caracteres!",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Digite somente letras!",
    },
  },
};

export default disciplinaValidator;
