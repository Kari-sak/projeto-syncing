-- Grupo Soul Coderz
-- RM94745 - Enzo Trevisan
-- RM94488 - Karen Mastrogiacomo Antiqueira
-- RM95121 - Karina Megumi Sakamoto
-- RM94426 - Thiago Martins Prado
-- RM93386 - Vinicius Renan Benjamin

drop table FoneCandidato CASCADE CONSTRAINTS; 
drop table FoneEmpresa CASCADE CONSTRAINTS; 
drop table Vaga CASCADE CONSTRAINTS;
drop table Tags_Vaga CASCADE CONSTRAINTS;
drop table Tags_Candidato CASCADE CONSTRAINTS;
drop table Porcentagem CASCADE CONSTRAINTS;
drop table Candidato CASCADE CONSTRAINTS;
drop table Candidatura CASCADE CONSTRAINTS;
drop table Empresa;


create table Candidato(
id_candidato numeric(6) generated as identity(start with 1 increment by 1),
nome_candidato varchar(30) not null,
senha_candidato varchar(30) not null,
tipo_Usuario varchar(11) not null,
email_candidato varchar(60) not null,
cpf VARCHAR(14) not null,
genero_candidato VARCHAR(20),
constraint Candidato_PK primary key (id_candidato)
);

alter table Candidato modify email_candidato varchar2(60) unique;

create table Empresa(
id_empresa NUMERIC(6) generated as identity(start with 1 increment by 1),
nome_empresa VARCHAR2(30) not null,
senha_empresa VARCHAR2(30) not null,
tipo_Usuario VARCHAR(20) not null,
email_empresa VARCHAR2(60) not null,
cnpj VARCHAR2(14) not null,
constraint Empresa_PK primary key (id_empresa)
);

alter table Empresa modify email_empresa varchar2(60) unique;
alter table Empresa modify cnpj varchar2(18);

create table Vaga(
id_vaga NUMERIC(6) generated as identity(start with 1 increment by 1),
nome_vaga VARCHAR2(30) not null,
descricao_vaga VARCHAR2(300) null
);

alter table Vaga add id_empresa NUMERIC(6) REFERENCES Empresa;

alter table Vaga add constraint Vaga_PK primary key (id_vaga);

alter table Vaga modify nome_vaga varchar(50);

CREATE TABLE Tags_Candidato(
id_Tags NUMERIC(4),
CONSTRAINT tagsCandidato_pk PRIMARY KEY (id_Tags));

alter table Tags_Candidato add id_candidato NUMERIC(6) references Candidato;

CREATE TABLE Tags_Vaga(
id_Tags NUMERIC(4),
peso_Tag NUMERIC(2,1),
CONSTRAINT tagsVaga_pk PRIMARY KEY (id_Tags));

alter table Tags_Vaga add id_vaga NUMERIC(6) references Vaga;

CREATE TABLE Porcentagem(
id_vaga NUMERIC(6) REFERENCES Vaga,
id_candidato NUMERIC(6) REFERENCES Candidato);

CREATE TABLE Candidatura(
id_candidato NUMERIC(6) REFERENCES Candidato,
id_vaga NUMERIC(6) REFERENCES Vaga);

CREATE TABLE FoneCandidato(
seq_fone NUMBER(1) not null,
fone NUMBER(13));

alter table FoneCandidato add id_fone number(5) generated as identity(start with 1 increment by 1);
alter table FoneCandidato add CONSTRAINT foneCandidato_pk PRIMARY KEY(id_fone);
alter table FoneCandidato add id_candidato number(6) references Candidato;

CREATE TABLE FoneEmpresa(
seq_fone NUMBER(1) not null,
fone NUMBER(13));

alter table FoneEmpresa add id_fone number(5) generated as identity(start with 1 increment by 1);
alter table FoneEmpresa add CONSTRAINT foneEmpresa_pk PRIMARY KEY(id_fone);
alter table FoneEmpresa add id_empresa NUMERIC(6) references Empresa;