class DecoratorGerenciador {

    constructor(gerenciador) { // O construtor recebe o gerenciador de contatos e o armazena para ser decorado

        this.gerenciador = gerenciador;

    }

    adicionarContato(contato) { // Método para adicionar um novo contato

        if (this.gerenciador.contatos.some(item => item.nome === contato.nome)) {

            console.log(`\nContato com o nome "${contato.nome}" já existe.`);

            console.log(`\nTente um nome diferente!`);

            return false;

        } else {

            this.gerenciador.adicionarContato(contato);

            infoContato(contato)

            return true;

        }

    }

    removerContato(nome) { // Método para remover um contato

        const contato = this.gerenciador.buscarContato(nome);

        const resultado = this.gerenciador.removerContato(nome);

        if (resultado) {

            infoContato(contato)

        }

        return resultado;
    }

}

function infoContato (contato) { // Função auxiliar para exibir as informações de um contato

    console.log(`\n-= Informações do contato =-`);

    console.log(`\nNome: ${contato.nome}`);

    console.log(`Telefone: ${contato.telefone}`);

    console.log(`Email: ${contato.email}`);

    console.log(`\n-===========================-`);

}

module.exports = DecoratorGerenciador; // Exporta a classe para uso em outros módulos