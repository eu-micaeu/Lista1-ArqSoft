const StrategyBusca = require("./StrategyBusca");

class BuscaTelefone extends StrategyBusca {

    buscar(lista, chave) { // Implementa o método 'buscar' que foi declarado na classe StrategyBusca

        return lista.filter(contato => contato.telefone === chave); // Filtra a lista de contatos e retorna todos os contatos cujo telefone seja igual à chave
        
    }

}

module.exports = BuscaTelefone; // Exporta a classe BuscaTelefone para que possa ser utilizada em outros módulos
