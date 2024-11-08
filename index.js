const Contato = require("./Contato");
const GerenciadorContatos = require("./GerenciadorContatos");
const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

const gerenciador = new GerenciadorContatos()

const exibirComandos = () => {

    console.log('\nSistema de Gerenciamento de Contatos');

    console.log('Comandos disponíveis:');

    console.log('1: Adicionar contato');

    console.log('2: Remover contato');

    console.log('3: Listar contatos');

    console.log('4: Buscar contato');

    console.log('5: Sair\n');

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

            gerenciador.adicionarContato(novoContato);

            console.log(`\nContato ${nome} adicionado com sucesso!`);

            break;

        case '2':

            const nomeRemover = await obterEntrada('Digite o nome do contato a remover: ');

            if (gerenciador.removerContato(nomeRemover)) {

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

            const nomeBuscar = await obterEntrada('Digite o nome do contato a buscar: ');

            const contato = gerenciador.buscarContato(nomeBuscar);

            if (contato) {

                console.log(`\nContato encontrado: Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);

            } else {

                console.log(`\nContato ${nomeBuscar} não encontrado.`);

            }

            break;

        case '5':

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
