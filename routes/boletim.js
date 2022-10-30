const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const con = require('./mysql');


ROUTER.post('/inserir',(req,res)=>{
    const id_boletim =req.body.id_boletim;
    const id_aluno = req.body.id_aluno;
    const id_disciplina=req.body.id_disciplina;
    const nota_1=req.body.nota_1;
    const nota_2=req.body.nota_2;
    const nota_3=req.body.nota_3;
    con.query('insert into boletim values(?,?,?,?,?,?)', [id_boletim,id_aluno,id_disciplina,nota_1,nota_2,nota_3],(err,result)=>
    {if(err){
        console.log(err);
    }
    else{
       res.send("inseriu!!!!!!");
    }}
    
    );
 } );
 ROUTER.get("/consultar",(req,res)=>{

    con.query("select * from boletim",function(err,result,fields){
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("tudos as disciplina ai meu chapa");
        }
    })
})




ROUTER.get("/consultar/:id",(req,res)=>{
    const id_a=req.params.id;
    con.query("select * from boletim where id_boletim=?" ,id_a,(err,result)=>{
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
    const id_aluno = req.body.id_aluno;
    const id_disciplina=req.body.id_disciplina;
    const nota_1=req.body.nota_1;
    const nota_2=req.body.nota_2;
    const nota_3=req.body.nota_3;

    con.query("UPDATE boletim set id_aluno=?,id_disciplina=?,nota_1=?,nota_2=?,nota_3=? WHERE id_boletim=?", [id_aluno,id_disciplina,nota_1,nota_2,nota_3,id_at],(err,result)=>
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


module.exports = ROUTER;