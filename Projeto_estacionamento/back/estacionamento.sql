drop database if exists projeto_estacionamento;
create database projeto_estacionamento charset=utf8 collate utf8_general_ci;
use projeto_estacionamento;

create table entrada (
    id integer not null auto_increment  primary key,
    vaga varchar(5) not null,
    placa varchar(10) not null,
    hora_entrada datetime not null,
    tipo varchar(6) not null,
    datas_entrada date not null
);

create table saida(
    id integer not null,
    datas_saida date not null,
    hora_saida datetime not null,
    foreign key (id) references entrada(id)
);

create table estacionar(  
      id integer not null,
    valor_total float (5,2) primary key,
      foreign key (id) references entrada(id)
);

describe estacionar;
show tables;