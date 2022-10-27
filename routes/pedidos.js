const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

//Retorna todos os pedidos
ROUTER.get('/', (req, res, next) => {
    res.status(200).send({
        msg: 'retorna pedidos'
    });
});

//Insrir um pedido
ROUTER.post('/', (req, res, next) => {
    const PEDIDOS = {
        id: req.body.id,
        qtd: req.body.qtd
    };
    res.status(201).send({
        msg: 'insere pedido',
        PedidoCriado: PEDIDOS
    });
});

//Retorna os dados um pedido
ROUTER.get('/:id_pedido', (req, res, next) => {
    const ID = req.params.id_pedido;
    res.status(200).send({
        msg: "Detalhes do pedido",
        id: ID
    });
});

//Altera um campo de pedido
ROUTER.patch('/', (req, res, next) => {
    res.status(201).send({
        msg: 'pedido alterado'
    });
});

//Exclui um pedido
ROUTER.delete('/', (req, res, next) => {
    res.status(201).send({
        msg: 'pedido excluido'
    });
});

module.exports = ROUTER;