const lojaValidator = {
    nome: {
        required: "O campo Nome é Obrigatório",
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
    cnpj: {
        required: "O CNPJ é Obrigatório",
        minLength: {
            value: 1,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 18,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    },
    local:{
        required: "O local  é Obrigatório",
    }
}

export default lojaValidator