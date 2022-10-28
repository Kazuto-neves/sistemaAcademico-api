const EXPRESS = require('express');
const APP = EXPRESS();
const MORGAN = require('morgan');
const BODYPARSER = require('body-parser')

const RDISCIPLINAS = require('./routes/disciplinas');
const RALUNOS = require('./routes/alunos');

APP.use(MORGAN('dev'));
APP.use(BODYPARSER.urlencoded({ extended: false })) //apenas dados simples
APP.use(BODYPARSER.json()); //json de entrada no body
APP.use(EXPRESS.json()); //dois json qual deixa

APP.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type , Accept, Authorization'
    );

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).send({});
    }

    next();
});

APP.use('/produtos', RDISCIPLINAS);
APP.use('/alunos', RALUNOS);

//Quando não encontrado rota,entra aqui:
APP.use((req, res, next) => {
    const ERRO = new Error('Não encontrando');
    ERRO.status = 404;
    next(ERRO);
});

APP.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            msg: error.message
        }
    })
});

module.exports = APP;