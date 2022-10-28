create database if not exists faeterjdb;
USE faeterjdb;
create table if not exists disciplinas(
    id_disciplina int primary key not null,
    nome_disciplina varchar(150) not null,
);
create table if not exists alunos(
    id_aluno int primary key not null,
    nome varchar(150) not null,
    data_nascimento date not null,
    email varchar(150) not null,
    senha varchar(150) not null
);
create table if not exists professores(
    id_professor int primary key not null,
    nome varchar(150) not null,
    data_nascimento date not null,
    email varchar(150) not null,
    senha varchar(150) not null
);
create table if not exists boletins(
    id_boletin int primary key not null,
    nota_1 decimal(4, 2) not null,
    nota_2 decimal(4, 2) not null,
    nota_3 decimal(4, 2),
    id_aluno int not null,
    id_disciplina int not null,
    id_professor int not null,
    foreign key (id_aluno) references alunos(id_aluno),
    foreign key (id_professor) references professores(id_professor),
    foreign key (id_disciplina) references disciplinas(id_disciplina)
);