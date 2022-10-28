var express = require("express");
var mysql=require("mysql");
var app=express()
app.use(express.json())
const PORT = process.env.PORT || 3000;
app.listen(PORT);
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql02POPP',
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


app.post('/post-professor',(req,res)=>{
    const id_professor=req.body.id_professor;
    const nome = req.body.nome;
    const data_nascimento  = req.body.data_nascimento;
    const email  = req.body.email;
    const senha  = req.body.senha;

    con.query('insert into Professor values(?,?,?,?,?)', [id_professor,nome,data_nascimento,email,senha],(err,result)=>
    {if(err){
        console.log(err);
    }
    else{
       res.send("inseriu!!!!!!");
    }}
    
    );
 } );
app.get("/get-professor",(req,res)=>{

    con.query("select * from Professor",function(err,result,fields){
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("tudos os profs ai meu chapa");
        }
    })
})




app.get("/get-professor/:id",(req,res)=>{
    const id_a=req.params.id;
    con.query("select * from Professor where id_professor=?" ,id_a,(err,result)=>{
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("id "+id_a);
        }
    })
});


app.put("/update-professor/:id",(req,res)=>
{
    const id_at=req.params.id;
    const nome = req.body.nome;
    const data_nascimento  = req.body.data_nascimento;
    const email  = req.body.email;
    const senha  = req.body.senha;

    con.query("UPDATE Professor set nome=?,data_nascimento=?,email=?,senha=? WHERE id_professor=?", [nome,data_nascimento,email,senha,id_at],(err,result)=>
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

app.delete("/excluir-professor/:id",(req,res)=>{
    const id_a=req.params.id;
    con.query("delete from Professor where id_professor=?" ,id_a,(err,result)=>{
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("id "+id_a);
        }
    })
});
