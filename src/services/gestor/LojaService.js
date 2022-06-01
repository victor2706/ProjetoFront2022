class LojaService {
    getAll(){
        const lojas = localStorage.getItem('lojas')
        return lojas ? JSON.parse(lojas) : []
    }

    get(id){
        const lojas = this.getAll()
        return lojas[id]

    }

    create(dados){
        const lojas = this.getAll()
        lojas.push(dados)
        localStorage.setItem('lojas', JSON.stringify(lojas))
    }

    update(id, dados){

        const lojas = this.getAll()
        lojas.splice(id, 1, dados)
        localStorage.setItem('lojas', JSON.stringify(lojas))

    }

    delete(id){

        const lojas = this.getAll()
        lojas.splice(id, 1)
        localStorage.setItem('lojas', JSON.stringify(lojas))

    }
}

export default new LojaService()