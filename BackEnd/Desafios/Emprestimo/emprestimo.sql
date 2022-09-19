drop database if exists Emprestimo;
create database Emprestimo charset=UTF8 collate utf8_general_ci;
use Emprestimo;

create table  clientes (
    cpf varchar(12) not null primary key,
    pri_nome varchar(20)not null, 
    sobrenome varchar(20) not null,
    cep varchar(9) not null,
    complemento varchar(20)
);

create table telefones(
    cpf varchar(12) not null,
    tipo varchar(10) not null,
    numero varchar(20) not null,

    foreign key (cpf) references clientes(cpf)
);

create table emprestimos(
    id_emprestimos integer auto_increment not null primary key,
     cpf varchar(12) not null,
    data date not null,
    capital float(5.2) not null,
    n_parcelas integer not null,
    taxa_juros integer not null,
    impostos integer not null,
    montante float(5.2) not null,

    foreign key (cpf) references clientes(cpf)
);

create table parcelas(
    id integer auto_increment not null primary key,
    id_emprestimos integer not null,
    vencimento date not null,
    pagamento float(5.2) not null,
    valor float(5.2) not null,
    val_recebido float(5.2) not null,
    diferenca float(5.2) not null,
    foreign key (id_emprestimos) references emprestimos(id_emprestimos)
);

describe clientes;
describe telefones;
describe emprestimos;
describe parcelas;

show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/Javascript-2.0/BackEnd/Desafios/Emprestimo/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/Javascript-2.0/BackEnd/Desafios/Emprestimo/docs/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from telefones;

LOAD DATA INFILE 'C:/Users/Desenvolvimento.DESKTOP-CJ165MI/Desktop/Javascript-2.0/BackEnd/Desafios/Emprestimo/docs/emprestimos.csv'
INTO TABLE emprestimos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from emprestimos;

