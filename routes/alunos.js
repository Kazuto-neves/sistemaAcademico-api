const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CONN = require('../configDB');

ROUTER.post('/inserir',(req,res)=>{
    const id_aluno=req.body.id_aluno;
    const nome = req.body.nome;
    const data_nascimento  = req.body.data_nascimento;
    const email  = req.body.email;
    const senha  = req.body.senha;

    CONN.query('insert into alunos values(?,?,?,?,?)', [id_aluno,nome,data_nascimento,email,senha],(err,result)=>
    {if(err){
        console.log(err);
    }
    else{
       res.send("inseriu!!!!!!");
    }}
    
    );
 } );
ROUTER.get("/consultar",(req,res)=>{

    CONN.query("select * from alunos",function(err,result,fields){
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("tudos alunos ai meu chapa");
        }
    })
})




ROUTER.get("/consultar/:id",(req,res)=>{
    const id_a=req.params.id;
    CONN.query("select * from alunos where id_aluno=?" ,id_a,(err,result)=>{
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("id "+id_a);
        }
    })
});


ROUTER.put("/atualizar/:id",(req,res)=>
{
    const id_at=req.params.id;
    const nome = req.body.nome;
    const data_nascimento  = req.body.data_nascimento;
    const email  = req.body.email;
    const senha  = req.body.senha;

    CONN.query("UPDATE alunos set nome=?,data_nascimento=?,email=?,senha=? WHERE id_aluno=?", [nome,data_nascimento,email,senha,id_at],(err,result)=>
    {
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
       res.send("atualizou!!!!!!");
    }
})
});

ROUTER.delete("/deletar/:id",(req,res)=>{
    const id_a=req.params.id;
    CONN.query("delete from alunos where id_aluno=?" ,id_a,(err,result)=>{
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("id "+id_a);
        }
    })
});

module.exports = ROUTER;