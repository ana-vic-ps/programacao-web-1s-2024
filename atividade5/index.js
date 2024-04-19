// index.js
const express = require('express');
const estoque = require('./src/estoque');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo ao gerenciador de estoque!');
});

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(p);
    res.send(p);
});

app.get('/listar', function (req, res) {
    res.send(estoque.listarProdutos());
});

app.get('/remover/:id', function (req, res) {
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(id);
});

app.get('/editar/:id/:qtd', function (req, res) {
    let id = req.params.id;
    let qtd = req.params.qtd;
    estoque.editarQuantidade(id, qtd);
    res.send(id + ' ' + qtd);
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});
