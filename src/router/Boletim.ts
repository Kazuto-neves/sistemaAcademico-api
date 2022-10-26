import {Router} from 'express';

const ROUTER = Router();

//Retorna todos os Produtos
ROUTER.get('/', (req, res, next) => {
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
ROUTER.get('/:id', (req, res, next) => {
    const ID = req.params.id;
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