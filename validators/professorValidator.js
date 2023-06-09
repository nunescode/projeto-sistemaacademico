const professorValidator = {
  
  nome: {
    required: "Campo obrigatório!",
    minLength: {
      value: 2,
      message: "Mínimo: 2 caracteres!",
    },
    maxLength: {
      value: 80,
      message: "Máximo: 80 caracteres!",
    },
    pattern: {
      value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      message: "Digite somente letras!",
    },
  },

  cpf: {
    required: "Campo obrigatório!",
    maxLength: {
      value: 11,
      message: "Máximo: 11 caracteres!",
    },
    pattern: {
      value: /[0-9]+$/,
      message: "Digite somente números!",
    },
  },

  matricula: {
    required: "Campo obrigatório!",
    minLength: {
      value: 8,
      message: "Mínimo: 8 caracteres!",
    },
    maxLength: {
      value: 11,
      message: "Máximo: 11 caracteres!",
    },
    pattern: {
      value: /[0-9]+$/,
      message: "Digite somente números!",
    },
  },

  salario: {
    minLength: {
      value: 4,
      message: "Mínimo: 4 caracteres!",
    },
    maxLength: {
      value: 8,
      message: "Máximo: 8 caracteres!",
    },
    pattern: {
      value: /[0-9.]+$/,
      message: "Digite somente números!",
    },
  },

  email: {
    maxLength: {
      value: 100,
      message: "Máximo: 100 caracteres!",
    },
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: "Digite um e-mail válido!",
    },
  },

  telefone: {
    minLength: {
      value: 8,
      message: "Mínimo: 8 caracteres!",
    },
    maxLength: {
      value: 15,
      message: "Máximo: 15 caracteres!",
    },
    pattern: {
      value: /[0-9]+$/,
      message: "Digite apenas números!",
    },
  },

  cep: {
    minLength: {
      value: 5,
      message: "Mínimo: 5 caracteres!",
    },
    maxLength: {
      value: 11,
      message: "Máximo: 11 caracteres!",
    },
    pattern: {
      value: /[0-9]+$/,
      message: "Digite apenas números!",
    },
  },

  logradouro: {
    minLength: {
      value: 5,
      message: "Mínimo: 5 caracteres!",
    },
    maxLength: {
      value: 100,
      message: "Máximo: 100 caracteres!",
    },
  },

  complemento: {
    minLength: {
      value: 5,
      message: "Mínimo: 5 caracteres!",
    },
    maxLength: {
      value: 30,
      message: "Máximo: 30 caracteres!",
    },
  },

  numero: {
    minLength: {
      value: 2,
      message: "Mínimo: 2 caracteres!",
    },
    maxLength: {
      value: 20,
      message: "Máximo: 20 caracteres!",
    },
    pattern: {
      value: /[0-9]+$/,
      message: "Digite apenas números!",
    },
  },

  bairro: {
    minLength: {
      value: 2,
      message: "Mínimo: 2 caracteres!",
    },
    maxLength: {
      value: 100,
      message: "Máximo: 100 caracteres!",
    },
  },
};

export default professorValidator;
