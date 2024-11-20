const StrategyBusca = require("./StrategyBusca");

class BuscaTelefone extends StrategyBusca {

    buscar(lista, chave) {

        return lista.filter(contato => contato.telefone === chave);

    }

}

module.exports = BuscaTelefone;