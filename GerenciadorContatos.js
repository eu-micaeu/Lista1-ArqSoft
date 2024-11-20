class GerenciadorContatos {

    constructor(strategy) {

        this.contatos = [];

        this.strategyBusca = strategy;

    }

    setStrategy(strategy) {

        this.strategyBusca = strategy;

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

    buscarContato(chave) {

        return this.strategyBusca.buscar(this.contatos, chave);

    }

}

module.exports = GerenciadorContatos;
