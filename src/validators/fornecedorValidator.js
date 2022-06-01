const fornecedorValidator = {
    nome: {
        required: " Nome do fornecedor é Obrigatório",
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
    produto:{
        required: "Nome do produto é obrigatório é Obrigatório",
    },
    data: {
        required: "Data de Envio é Obrigatório",   
    },   
}

export default fornecedorValidator