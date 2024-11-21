const StrategyBusca = require("./StrategyBusca");

class BuscaNome extends StrategyBusca {

    buscar(lista, chave) { // Implementa o método 'buscar' que foi declarado na classe StrategyBusca
        
        return lista.find(contato => contato.nome === chave); // Busca na lista de contatos o primeiro contato cujo nome seja igual à chave
        
    }

}

module.exports = BuscaNome; // Exporta a classe BuscaNome para que possa ser utilizada em outros módulos
