const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const POSTGRES = require('../postgres').pool;

//Retorna todos os Produtos
ROUTER.get('/', (req, res, next) => {
    const DISCIPLINA = {
        id: r
    }
    res.status(200).send({
        msg: 'retorna produtos'
    });
});

//Insrir um produto
ROUTER.post('/', (req, res, next) => {
    const PRODUTO = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        msg: 'insere produto',
        produtoCriado: PRODUTO
    });
});

//Retorna os dados um produto
ROUTER.get('/:id_produto', (req, res, next) => {
    const ID = req.params.id_produto;
    res.status(200).send({
        msg: "Detalhes do produto",
        id: ID
    });
});

//Altera um campo de produtos
ROUTER.patch('/', (req, res, next) => {
    res.status(201).send({
        msg: 'produto alterado'
    });
});

//Exclui um produto
ROUTER.delete('/', (req, res, next) => {
    res.status(201).send({
        msg: 'produto excluido'
    });
});

module.exports = ROUTER;