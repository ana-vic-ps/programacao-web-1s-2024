// estoque.js
let produtos = [];

function criarProduto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p;
}

function adicionarProduto(p) {
    produtos.push(p);
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter((p) => p.id != id);
}

function editarQuantidade(id, qtd) {
    produtos.forEach((p) => {
        if (p.id === id) {
            p.qtd = qtd;
        }
    });
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarQuantidade
};
