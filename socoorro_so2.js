var express = require("express");
var mysql=require("mysql")
var app=express()
app.use(express.json())
const PORT = process.env.PORT || 3000;
app.listen(PORT);
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sua senha',
    database:'faeterjdb'

});

con.connect((err)=>{


if(err){
    console.log(err);
}
else{
    console.log("connectou");
}
});



app.post('/post-aluno',(req,res)=>{
    const id_aluno=req.body.id_aluno;
    const nome = req.body.nome;
    const data_nascimento  = req.body.data_nascimento;
    const email  = req.body.email;
    const senha  = req.body.senha;

    con.query('insert into Aluno values(?,?,?,?,?)', [id_aluno,nome,data_nascimento,email,senha],(err,result)=>
    {if(err){
        console.log(err);
    }
    else{
       res.send("inseriu!!!!!!");
    }}
    
    );
 } );
app.get("/get-aluno",(req,res)=>{

    con.query("select * from Aluno",function(err,result,fields){
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("tudos alunos ai meu chapa");
        }
    })
})




app.get("/get-aluno/:id",(req,res)=>{
    const id_a=req.params.id;
    con.query("select * from Aluno where id_aluno=?" ,id_a,(err,result)=>{
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("id "+id_a);
        }
    })
});


app.put("/update-aluno/:id",(req,res)=>
{
    const id_at=req.params.id;
    const nome = req.body.nome;
    const data_nascimento  = req.body.data_nascimento;
    const email  = req.body.email;
    const senha  = req.body.senha;

    con.query("UPDATE Aluno set nome=?,data_nascimento=?,email=?,senha=? WHERE id_aluno=?", [nome,data_nascimento,email,senha,id_at],(err,result)=>
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

app.delete("/excluir-aluno/:id",(req,res)=>{
    const id_a=req.params.id;
    con.query("delete from Aluno where id_aluno=?" ,id_a,(err,result)=>{
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("id "+id_a);
        }
    })
});
