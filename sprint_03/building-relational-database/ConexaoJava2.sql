CREATE TABLE Candidato(
id_candidato VARCHAR(4),
nome_candidato VARCHAR2(30) not null,
senha_candidato VARCHAR2(30) not null,
tipo_Usuario VARCHAR2(30) not null,
email_candidato VARCHAR2(60) not null,
cpf VARCHAR(11) not null,
genero_candidato VARCHAR(20),
CONSTRAINT Candidato_pk PRIMARY KEY (id_candidato))

CREATE TABLE Empresa(
id_empresa VARCHAR2(4) not null,
nome_empresa VARCHAR2(30) not null,
senha_empresa VARCHAR2(30) not null,
tipo_Usuario VARCHAR(20) not null,
email_empresa VARCHAR2(60) not null,
cnpj VARCHAR2(14),
CONSTRAINT Empresa_pk PRIMARY KEY (id_empresa))

CREATE TABLE FoneCandidato(
seq_fone NUMBER(1) not null,
fone NUMBER(13),
id_candidato VARCHAR2(4) REFERENCES Candidato,
CONSTRAINT foneCandidato_pk PRIMARY KEY(fone))

CREATE TABLE FoneEmpresa(
seq_fone NUMBER(1) not null,
fone NUMBER(13),
id_empresa VARCHAR2(4) REFERENCES Empresa,
CONSTRAINT foneEmpresa_pk PRIMARY KEY(fone))

CREATE TABLE Vaga(
id_vaga VARCHAR2(4),
nome_vaga VARCHAR2(30) not null,
descricao_vaga VARCHAR2(300) null,
id_empresa VARCHAR2(4) REFERENCES Empresa,
CONSTRAINT vaga_pk PRIMARY KEY (id_vaga))

CREATE TABLE Candidatura(
id_candidato VARCHAR2(4) REFERENCES Candidato,
id_vaga VARCHAR2(4) REFERENCES Vaga)

CREATE TABLE Tags_Candidato(
id_Tags NUMERIC(4),
CONSTRAINT tagsCandidato_pk PRIMARY KEY (id_Tags))

CREATE TABLE Tags_Vaga(
id_Tags NUMERIC(4),
peso_Tag NUMERIC(2,1),
CONSTRAINT tagsVaga_pk PRIMARY KEY (id_Tags))

CREATE TABLE Porcentagem(
id_vaga VARCHAR2(4) REFERENCES Vaga,
id_candidato VARCHAR2(4) REFERENCES Candidato)

SELECT * FROM FoneCandidato;
SELECT * FROM FoneEmpresa;
SELECT * FROM Empresa;
SELECT * FROM Candidato;
SELECT * FROM Vaga;