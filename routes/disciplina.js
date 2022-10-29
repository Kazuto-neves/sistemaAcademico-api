/*create table disciplina(
id_disciplina int primary key not null,
nome varchar(150) not null,
id_professor int not null,
foreign key (id_professor) references professor(id_professor),
ativo boolean not null
);*/

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const con = require('./mysql');

con.connect((err)=>{


if(err){
    console.log(err);
}
else{
    console.log("connectou");
}
});

ROUTER.post('/post-disciplina',(req,res)=>{
    const id_disciplina =req.body.id_disciplina;
    const nome = req.body.nome;
    const id_professor=req.body.id_professor;
    const ativo=req.body.ativo;
    con.query('insert into disciplina values(?,?,?,?)', [id_disciplina,nome,id_professor,ativo],(err,result)=>
    {if(err){
        console.log(err);
    }
    else{
       res.send("inseriu!!!!!!");
    }}
    
    );
 } );
 ROUTER.get("/get-disciplina",(req,res)=>{

    con.query("select * from disciplina",function(err,result,fields){
        if(err){
                console.log(err)
        }else{
            res.send(result);
            console.log("tudos as disciplina ai meu chapa");
        }
    })
})
