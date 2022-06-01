class SalaService {
    getAll(){
        const salas = localStorage.getItem('salas')
        return salas ? JSON.parse(salas) : []
    }

    get(id){

        const salas = this.getAll()
        return salas[id]

    }

    create(dados){
        const salas = this.getAll()
        salas.push(dados)
        localStorage.setItem('salas', JSON.stringify(salas))
    }

    update(id, dados){

        const salas = this.getAll()
        salas.splice(id, 1, dados)
        localStorage.setItem('salas', JSON.stringify(salas))

    }

    delete(id){

        const salas = this.getAll()
        salas.splice(id, 1)
        localStorage.setItem('salas', JSON.stringify(salas))

    }
}

export default new SalaService()