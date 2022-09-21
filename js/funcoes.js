function validarProduto(nomeProduto, codProduto, qtdadeProduto) {
    let nome = document.getElementById(nomeProduto).value,
        codigo = document.getElementById(codProduto).value,
        qtidade = document.getElementById(qtdadeProduto).value;

    if (nome === "") {
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    } else if (codigo === "") {
        alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
    } else {
        cadastrarProduto(nome, codigo, parseInt(qtidade));
    }
}

function cadastrarProduto(produto, codigo, qtidade) {
    let novoProduto = { nome: produto, codigo: codigo, quantidade: qtidade };

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");

        if (produtos === null) { // Nenhum produto ainda foi cadastrado
            produtos = [];
        } else {
            produtos = JSON.parse(produtos);
        }

        // produtos = produtos === null ? [] : JSON.parse(produtos);

        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos));

        alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");

        atualizarTotalEstoque("totalEstoque");

        location.reload();
    }
}

function atualizarTotalEstoque(totalEstoque) {
    localStorage.setItem("totalEstoque", ++document.getElementById(totalEstoque).innerHTML);
}

function carregarTotalEstoque(_totalEstoque) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        totalEstoque = totalEstoque !== null ?? 0; // IF ternário
        document.getElementById(_totalEstoque).innerHTML = totalEstoque;
    }
}

function listarEstoque() {
    // if (typeof(Storage) !== "undefined") {
    if (Storage !== undefined) {
        let produtos = localStorage.getItem("produtos");

        document.write("<h1>Estoque:</h1>");

        if (produtos === null) {
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        } else {
            produtos = JSON.parse(produtos);

            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Informações do produto: "+produto.codigo+"</li>");
                document.write("<li>Quantidade no estoque: "+produto.quantidade+"</li>");
                document.write("</ul>");
            });
        }
    }
}