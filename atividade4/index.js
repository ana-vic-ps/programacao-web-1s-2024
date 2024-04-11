const express = require('express');
const calc = require('./util/calculadora');
const app = express();

app.get('/', (req, res) => {
    res.send('Calculadora - página inicial');
});

const operacoes = ['somar', 'subtrair', 'multiplicar', 'dividir'];

operacoes.forEach((operacao) => {
    app.get(`/${operacao}/:a/:b`, (req, res) => {
        const { a, b } = req.params;
        let resultado;

        switch (operacao) {
            case 'somar':
                resultado = calc.somar(a, b);
                break;
            case 'subtrair':
                resultado = calc.subtrair(a, b);
                break;
            case 'multiplicar':
                resultado = calc.multiplicar(a, b);
                break;
            case 'dividir':
                resultado = calc.dividir(a, b);
                break;
            default:
                resultado = 'Operação inválida';
        }

        res.send(`${resultado}`);
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
