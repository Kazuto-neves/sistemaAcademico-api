const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONN = require('../config/configDB');

ROUTER.post('/inserir', (req, res) => {
    const id_disciplina = req.body.id_disciplina;
    const nome = req.body.nome;
    const id_professor = req.body.id_professor;
    const ativo = req.body.ativo;
    CONN.query('insert into disciplinas values(?,?,?,?)', [id_disciplina, nome, ativo,id_professor], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("id_disciplina: " + id_disciplina + "\nnome: " + nome + "\nativo: " + ativo + "\nid_professor: " + id_professor);
            console.log(result);
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
            console.log(result);
        }
    })
})

ROUTER.get("/consultar/:id",(req,res)=>{
    const id_a=req.params.id;
    con.query("select * from disciplinas where id_disciplina=?" ,id_a,(err,result)=>{
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("id_disciplina"+id_a);
        }
    })
});

ROUTER.put("/atualizar/:id",(req,res)=>
{
    const id_at=req.params.id;
    const nome = req.body.nome;
    const id_professor=req.body.id_professor;
    const ativo=req.body.ativo;

    con.query("UPDATE disciplinas set nome=?,id_professor=?,ativo=? WHERE id_disciplina=?", [nome,id_professor,ativo,id_at],(err,result)=>
    {
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
        res.send("Atualizado o id " + id_at);
    }
})
});
module.exports = ROUTER;
