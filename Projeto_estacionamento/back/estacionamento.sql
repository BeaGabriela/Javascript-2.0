drop database if exists projeto_estacionamento;
create database projeto_estacionamento charset=utf8 collate utf8_general_ci;
use projeto_estacionamento;

create table estacionar(
    id integer not null auto_increment  primary key,
    vaga varchar(5) not null,
    placa varchar(10) not null,
    hora_entrada datetime not null,
    tipo varchar(6) not null,
    datas_entrada date not null,
    datas_saida date not null,
    hora_saida datetime not null,
    valor_total float(5,2)
);
describe estacionar;
show tables;