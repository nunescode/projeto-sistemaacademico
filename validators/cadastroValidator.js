const cadastroValidator = {
  nome: {
    required: "Campo obrigatório!",
    minLength: {
      value: 3,
      message: "Mínimo: 3 caracteres!",
    },
    maxLength: {
      value: 100,
      message: "Máximo: 100 caracteres!",
    },
    pattern: {
      value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      message: "Digite somente letras!",
    },
  },

  email: {
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
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: "Digite um e-mail válido!",
    },
  },

  senha: {
    required: "Campo obrigatório!",
    minLength: {
        value: 6,
        message: "Mínimo: 6 caracteres!"
    }
  }
}

export default cadastroValidator;
