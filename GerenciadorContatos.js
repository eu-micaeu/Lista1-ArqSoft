class GerenciadorContatos {

    constructor() {

        this.contatos = [];

    }

    adicionarContato(contato) {

        this.contatos.push(contato);

    }

    removerContato(nome) {

        const index = this.contatos.findIndex(contato => contato.nome === nome);

        if (index !== -1) {

            this.contatos.splice(index, 1);

            return true; 

        }

        return false; 

    }

    listarContatos() {

        return this.contatos;

    }

    buscarContato(nome) {

        return this.contatos.find(contato => contato.nome === nome);

    }
    
}

module.exports = GerenciadorContatos;
