const Contato = require("./Contato");
const GerenciadorContatos = require("./GerenciadorContatos");
const DecoratorGerenciador = require("./decorator/decoratorGerenciador.js");
const StrategyBusca = require("./strategy/StrategyBusca.js");
const BuscaNome = require("./strategy/BuscaNome.js");
const BuscaTelefone = require("./strategy/BuscaTelefone.js");
const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

const gerenciador = new GerenciadorContatos(new StrategyBusca())

const decorator = new DecoratorGerenciador(gerenciador)

const exibirComandos = () => {

    console.log('\nSistema de Gerenciamento de Contatos');

    console.log('Comandos disponíveis:');

    console.log('1: Adicionar contato');

    console.log('2: Remover contato');

    console.log('3: Listar contatos');

    console.log('4: Buscar contato por nome');

    console.log('5: Buscar contato por telefone');

    console.log('6: Sair\n');

};

const obterEntrada = (pergunta) => {

    return new Promise(resolve => rl.question(pergunta, resolve));

};

const main = async () => {

    exibirComandos();

    const input = await obterEntrada('Escolha uma opção: ');

    switch (input.trim()) {

        case '1':

            const nome = await obterEntrada('Digite o nome do contato: ');

            const telefone = await obterEntrada('Digite o telefone do contato: ');

            const email = await obterEntrada('Digite o email do contato: ');

            const novoContato = new Contato(nome, telefone, email);

            decorator.adicionarContato(novoContato);

            break;

        case '2':

            const nomeRemover = await obterEntrada('Digite o nome do contato a remover: ');

            if (decorator.removerContato(nomeRemover)) {

                console.log(`\nContato ${nomeRemover} removido com sucesso!`);

            } else {

                console.log(`\nContato ${nomeRemover} não encontrado.`);

            }

            break;

        case '3':

            const contatos = gerenciador.listarContatos();

            if (contatos.length > 0) {

                console.log('\nLista de contatos:');

                contatos.forEach(contato => {

                    console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);

                });

            } else {

                console.log('\nNenhum contato encontrado.');

            }

            break;

        case '4':

            gerenciador.setStrategy(new BuscaNome());

            const nomeBuscar = await obterEntrada('Digite o nome do contato a buscar: ');

            const contato = gerenciador.buscarContato(nomeBuscar);

            if (contato) {

                console.log(`\nContato encontrado: Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);

            } else {

                console.log(`\nContato ${nomeBuscar} não encontrado.`);

            }

            break;

        case '5':

            gerenciador.setStrategy(new BuscaTelefone());

            const telefoneBuscar = await obterEntrada('Digite o telefone do contato a buscar: ');

            const lista = gerenciador.buscarContato(telefoneBuscar);

            if (lista.length > 0) {

                console.log(`\n-= Contatos Encontrados =-`)

                lista.forEach(contato => {

                    console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
                    
                });

            } else {

                console.log(`\nContatos não encontrados com esse telefone.`);

            }

        break;

        case '6':

            console.log('\nSaindo do sistema...');

            rl.close();

            return;

        default:

            console.log('\nComando não reconhecido.\n');

            await main(); 

    }

    await main();

};

main();
