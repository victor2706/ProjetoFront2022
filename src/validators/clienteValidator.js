const clienteValidator = {
    nome: {
        required: "O Nome é Obrigatório",
        minLength: {
            value: 1,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 100,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 10,
            message: "O valor mínimo é 3"
        },
    },
    cpf: {
        required: "O CPF é Obrigatório",
        minLength: {
            value: 1,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 14,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    email: {
        required: "O campo E-mail é Obrigatório",   
    },
    data: {
        required: "Data de nascimento é Obrigatório",   
    },   
}

export default clienteValidator