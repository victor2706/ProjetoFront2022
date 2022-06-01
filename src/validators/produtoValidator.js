const produtoValidator = {
    nome: {
        required: "O campo Nome é Obrigatório",
        minLength: {
            value: 10,
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
    codigo: {
        required: "O código do Produto é Obrigatório",
        minLength: {
            value: 10,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 10,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },

    valor: {
        required: "O Valor do Produto é Obrigatório"
    },
    estoque: {
        required: "A quantidade deste produto que terá no Estoque é Nescessário"
    }
}

export default produtoValidator