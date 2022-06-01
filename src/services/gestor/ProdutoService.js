class ProdutoService {
    getAll(){
        const produtos = localStorage.getItem('produtos')
        return produtos ? JSON.parse(produtos) : []
    }

    get(id){

        const produtos = this.getAll()
        return produtos[id]

    }

    create(dados){
        const produtos = this.getAll()
        produtos.push(dados)
        localStorage.setItem('produtos', JSON.stringify(produtos))
    }

    update(id, dados){

        const produtos = this.getAll()
        produtos.splice(id, 1, dados)
        localStorage.setItem('produtos', JSON.stringify(produtos))


    }

    delete(id){

        const produtos = this.getAll()
        produtos.splice(id, 1)
        localStorage.setItem('produtos', JSON.stringify(produtos))

    }
}

export default new ProdutoService()