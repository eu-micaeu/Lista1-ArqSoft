class GerenciadorContatos {

    constructor(strategy) { // O construtor é chamado ao criar um novo objeto da classe GerenciadorContatos

        this.contatos = [];

        this.strategyBusca = strategy;

    }

    setStrategy(strategy) { // Define uma nova estratégia de busca

        this.strategyBusca = strategy;

    }

    adicionarContato(contato) {  // Adiciona um novo contato ao array de contatos

        this.contatos.push(contato);

    }

    removerContato(nome) {  // Encontra o índice do contato pelo nome e remove-o da lista

        const index = this.contatos.findIndex(contato => contato.nome === nome);

        if (index !== -1) {

            this.contatos.splice(index, 1);

            return true;

        }

        return false;

    }

    listarContatos() { // Retorna a lista de todos os contatos

        return this.contatos;

    }

    buscarContato(chave) { // Busca um contato usando a estratégia definida, passando a lista de contatos e a chave de busca

        return this.strategyBusca.buscar(this.contatos, chave);

    }

}

module.exports = GerenciadorContatos;
