const envioValidator = {
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
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    produto: {
        required: "O Nome do Produto é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 20,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    fornecedor: {
        required: "O Nome do Fornecedor é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 20,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    lojas: {
        required: "O Nome da loja é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 20,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
    quantidade: {
        required: "A quantidade deste produto que foi comprado é Obrigatório"
    },
    cep: {
        required: "O Cep é Obrigatório",
        minLength: {
            value: 9,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 9,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    data: {
        required: "Data de Envio é Obrigatório",   
    },   
}

export default envioValidator