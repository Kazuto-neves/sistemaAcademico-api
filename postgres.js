const { Client } = require('pg');
const CLIENTE = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "mysenha",
  database: "ecommerce"
});

CLIENTE.connect();
CLIENTE.query('Select * from Produtos',
  (err, res)=>{
    if(!err){
      console.log(res.rows);
    }else{
      console.log(err.message);
    }
    CLIENTE.end;
  });
