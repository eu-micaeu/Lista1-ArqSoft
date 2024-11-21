class StrategyBusca {

    buscar(lista, chave) { // O método 'buscar' é um método abstrato que deve ser implementado pelas subclasses

        throw new Error(`Implementação do Strategy`); // Lança um erro se o método for chamado diretamente na classe StrategyBusca, pois a implementação deve ser feita pelas classes que herdam StrategyBusca.

    }

}

module.exports = StrategyBusca; // Exporta a classe StrategyBusca para que possa ser usada em outros módulos
