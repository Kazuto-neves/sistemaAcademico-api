const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const CON = require('./mysql');

ROUTER.post('/post-professor',(req,res)=>{
    const id_professor=req.body.id_professor;
    const nome = req.body.nome;
    const data_nascimento  = req.body.data_nascimento;
    const email  = req.body.email;
    const senha  = req.body.senha;

    CON.query('insert into Professor values(?,?,?,?,?)', [id_professor,nome,data_nascimento,email,senha],(err,result)=>
    {if(err){
        console.log(err);
    }
    else{
       res.send("inseriu!!!!!!");
    }}
    
    );
 } );
 ROUTER.get("/get-professor",(req,res)=>{

    CON.query("select * from Professor",function(err,result,fields){
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("tudos os profs ai meu chapa");
        }
    })
})




ROUTER.get("/get-professor/:id",(req,res)=>{
    const id_a=req.params.id;
    CON.query("select * from Professor where id_professor=?" ,id_a,(err,result)=>{
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("id "+id_a);
        }
    })
});


ROUTER.put("/update-professor/:id",(req,res)=>
{
    const id_at=req.params.id;
    const nome = req.body.nome;
    const data_nascimento  = req.body.data_nascimento;
    const email  = req.body.email;
    const senha  = req.body.senha;

    CON.query("UPDATE Professor set nome=?,data_nascimento=?,email=?,senha=? WHERE id_professor=?", [nome,data_nascimento,email,senha,id_at],(err,result)=>
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

ROUTER.delete("/excluir-professor/:id",(req,res)=>{
    const id_a=req.params.id;
    CON.query("delete from Professor where id_professor=?" ,id_a,(err,result)=>{
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("id "+id_a);
        }
    })
});
module.exports = ROUTER;
