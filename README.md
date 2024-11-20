# Sistema de Gerenciamento de Contatos em JavaScript

## Objetivo

Aplicar padrões de projeto em JavaScript, tanto estruturais quanto comportamentais, em um contexto prático de desenvolvimento de um sistema de gerenciamento de contatos.

## Problema

Você foi contratado para desenvolver um sistema de gerenciamento de contatos em JavaScript. O sistema deve permitir aos usuários adicionar, remover e listar contatos. Além disso, eles devem ser capazes de buscar contatos por nome.

## Requisitos Iniciais

1. **Classe Contato**: 
   - Implemente uma classe `Contato` que represente um contato com os seguintes atributos: `nome`, `telefone` e `email`.

2. **Classe GerenciadorContatos**:
   - Implemente uma classe `GerenciadorContatos` que possua métodos para adicionar, remover e listar contatos. Este gerenciador deve manter uma lista de contatos.

3. **Interface de Linha de Comando (CLI)**:
   - Implemente uma interface simples de linha de comando (CLI) que permita aos usuários interagirem com o sistema (adicionar, remover, listar e buscar contatos).

4. **Padrão de Projeto Estrutural**:
   - Utilize um padrão de projeto estrutural para garantir que a adição e remoção de contatos possam ser facilmente estendidas no futuro, sem modificar o código existente.

5. **Padrão de Projeto Comportamental**:
   - Utilize um padrão de projeto comportamental para implementar a funcionalidade de busca de contatos, garantindo que esta possa variar independentemente dos algoritmos de busca.

## Instruções Adicionais

- Você pode escolher qualquer **padrão de projeto estrutural** e **comportamental** para implementar os requisitos.
- Documente o seu código de forma clara, explicando a escolha dos padrões de projeto utilizados.
- Siga as melhores práticas de desenvolvimento JavaScript e padrões de codificação.
- Teste o seu sistema para garantir que ele atenda aos requisitos especificados.

## Entrega

- O projeto pode ser feito individualmente ou em dupla (identifique o grupo na documentação).
- Todos os membros do grupo devem publicar o projeto via Moodle individualmente, incluindo a documentação simples.
- A documentação deve conter:
  - Os padrões de projeto escolhidos.
  - Justificativas para a seleção dos padrões de projeto.

## Padrões utilizados

- Strategy
- Decorator