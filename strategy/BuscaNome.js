const StrategyBusca = require("./StrategyBusca");

class BuscaNome extends StrategyBusca {

    buscar(lista, chave) {

        return lista.find(contato => contato.nome === chave);
        
    }

}

module.exports = BuscaNome;