# Controle de Estoque

> 🚧 Aplicação em desenvolvimento 👷 Application under development 🚧

## Sobre

💡 Sistema para controle de estoque em implementação na fase de teste em uma pequena empresa de ferragens.

## Requerimentos
### Produto
    - Nome
    - Código
    - Quantidade
    - Descrição

## Banco de dados
### Tabela: produtos
    - id: int AUTO_INCREMENT UNIQUE
    - nome: string NOT NULL
    - codigo: string NULL
    - quantidade: int NOT NULL
    - descricao: string NOT NULL
    - created_at: Datetime
    - updated_at: Datetime

## Sistema
### Services
    - Listar produtos
    - Cadastrar produtos
    - Atualizar produtos
    - Remover produtos
