const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'projeto_estacionamento'
});

app.get('./projeto_estacionamento/estacionar', (req,res) => {
    let string = 'select * from estacionar order by id';
    con.query(string,(err, result) => {
        if(err==null){
            res.json(result);
        }
    });
});

app.post('./projeto_estacionamento/estacionar', (req,res) => {
    let string = `insert into estacionar values (default, '${req.body.vaga}','${req.body.placa}',curtime(),'${req.body.tipo}',curdate(), '${req.body.data_saida}','${req.body.hora_saida}')`;
    con.query(string,(err, result) => {
        if(err==null){
            res.json(result);
        }
    });
});

app.listen(5000, () => {
    console.log('Respondendo na porta 50000')
})