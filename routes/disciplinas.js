const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONN = require('../config/configDB');

ROUTER.post('/inserir', (req, res) => {
    const id_disciplina = req.body.id_disciplina;
    const nome = req.body.nome;
    const id_professor = req.body.id_professor;
    const ativo = req.body.ativo;
    CONN.query('insert into disciplinas values(?,?,?,?)', [id_disciplina, nome, id_professor, ativo], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("inseriu!!!!!!");
        }
    }

    );
});
ROUTER.get("/consultar", (req, res) => {

    CONN.query("select * from disciplinas", function (err, result, fields) {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
            console.log("tudos as disciplina ai meu chapa");
        }
    })
})

module.exports = ROUTER;