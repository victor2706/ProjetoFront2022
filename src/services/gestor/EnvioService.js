class EnvioService {
    getAll(){
        const envios = localStorage.getItem('envios')
        return envios ? JSON.parse(envios) : []
    }

    get(id){

        const envios = this.getAll()
        return envios[id]

    }

    create(dados){
        const envios = this.getAll()
        envios.push(dados)
        localStorage.setItem('envios', JSON.stringify(envios))
    }

    update(id, dados){

        const envios = this.getAll()
        envios.splice(id, 1, dados)
        localStorage.setItem('envios', JSON.stringify(envios))

    }

    delete(id){

        const envios = this.getAll()
        envios.splice(id, 1)
        localStorage.setItem('envios', JSON.stringify(envios))

    }
}

export default new EnvioService()