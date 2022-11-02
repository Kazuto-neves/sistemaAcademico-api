const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONN = require('../config/configDB');

ROUTER.post('/inserir', (req, res) => {
    const id_professor = req.body.id_professor;
    const nome = req.body.nome;
    const data_nascimento = req.body.data_nascimento;
    const email = req.body.email;
    const senha = req.body.senha;

    CONN.query('insert into professores values(?,?,?,?,?)', [id_professor, nome, data_nascimento, email, senha], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("id_professor:"+id_professor+"\nnome:"+nome+"\ndata_nascimento:"+data_nascimento+"\nemail:"+email+"\nsenha:"+senha);
            console.log(result);
        }
    }

    );
});
ROUTER.get("/consultar", (req, res) => {

    CONN.query("select * from professores", function (err, result, fields) {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
            console.log(result);
        }
    })
})




ROUTER.get("/consultar/:id", (req, res) => {
    const id_a = req.params.id;
    CONN.query("select * from professores where id_professor=?", id_a, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
            console.log("id_professor: "+id_a);
        }
    })
});


ROUTER.put("/atualizar/:id", (req, res) => {
    const id_at = req.params.id;
    const nome = req.body.nome;
    const data_nascimento = req.body.data_nascimento;
    const email = req.body.email;
    const senha = req.body.senha;

    CONN.query("UPDATE professores set nome=?,data_nascimento=?,email=?,senha=? WHERE id_professor=?", [nome, data_nascimento, email, senha, id_at], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.send("Atualizado o id "+id_at);
        }
    })
});

ROUTER.delete("/deletar/:id", (req, res) => {
    const id_a = req.params.id;
    CONN.query("delete from professores where id_professor=?", id_a, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
            console.log("Excluido o id "+id_a);
        }
    })
});

module.exports = ROUTER;
