/*CANDIDATO*/
insert into Candidato (nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) 
values ('Karen','karen123.','Candidato', 'karenantique@email.com.br', '487.256.214-21', 'Feminino');

insert into Candidato (nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) 
values ('Davi','123DaviM','Candidato', 'davI@gmail.com', '11254895912', 'Masculino');

insert into Candidato (nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) 
values ('Mariana','986381A','Candidato', 'marimari@yahoo.com.br', '25658525700', 'Feminino');

insert into Candidato (nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) 
values ('Jefferson','JeFF1516','Candidato', 'itsjeff@bol.com.br', '012.879.256-98', 'Masculino');

insert into Candidato (nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) 
values ('Marielle','ririELE1212','Candidato', 'marielles2@gmail.com', '14578498510', 'N o Bin rio');

insert into Candidato (nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) 
values ('Jose Carlos','senha1234','Candidato', 'carlitosJose@yahoo.com.br', '25632856978', 'Masculino');

insert into Candidato (nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) 
values ('Jana na','Janna123','Candidato', 'anaAJanna@bol.com', '123.456.789-12', 'N o Bin rio');

insert into Candidato (nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) 
values ('Josefina Alves','Fina123Jose','Candidato', 'jOSEFINA@gmail.com', '689.447.889-45', 'Feminino');

insert into Candidato (nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) 
values ('Roberto Moraes','Moraes45','Candidato', 'MoraesRO@bol.com', '58944421456', 'Masculino');

insert into Candidato (nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) 
values ('Ana Maria','MariaAna','Candidato', 'AnaMaria0@yahoo.com.br', '11256897725', 'Feminino');

SELECT * FROM CANDIDATO;

/*EMPRESA*/
insert into Empresa(nome_empresa, senha_empresa, tipo_Usuario, email_empresa, cnpj)
values('Ponto Frio','pONT123CWQ', 'Empresa', 'FrioOPonto@pontoFrio.com','58.119.377/0001-58');

insert into Empresa(nome_empresa, senha_empresa, tipo_Usuario, email_empresa, cnpj)
values('Casas S o Paulo','xf341rCasSP', 'Empresa', 'CasaSP@gmail.com.br','45.159.265/0001-12');

insert into Empresa(nome_empresa, senha_empresa, tipo_Usuario, email_empresa, cnpj)
values('ValoRE','kiyf6VRE', 'Empresa', 'ValoRE@valore.com','48489987000158');

insert into Empresa(nome_empresa, senha_empresa, tipo_Usuario, email_empresa, cnpj)
values('Fiap','FiapP123', 'Empresa', 'FiapMNG@fiap.com','25.896.220/0001-02');

insert into Empresa(nome_empresa, senha_empresa, tipo_Usuario, email_empresa, cnpj)
values('JYP','bgoiJYP17842', 'Empresa', 'JYPEntertainment@gmail.com','20458988000125');

insert into Empresa(nome_empresa, senha_empresa, tipo_Usuario, email_empresa, cnpj)
values('CamisolaBLue','azulCamisola12', 'Empresa', 'CamisolaBlue@bol.com','98.773.458/0001-04');

insert into Empresa(nome_empresa, senha_empresa, tipo_Usuario, email_empresa, cnpj)
values('Caneta Ros ','56130K.a', 'Empresa', 'LeRose@yahoo.com.br','22.450.278/0001-58');

insert into Empresa(nome_empresa, senha_empresa, tipo_Usuario, email_empresa, cnpj)
values('MiauCat','AMOGATOS123.', 'Empresa', 'MiauCat@gmail.com','11.585.993/0001-10');

insert into Empresa(nome_empresa, senha_empresa, tipo_Usuario, email_empresa, cnpj)
values('DoguinhoVET','vetBixinhos1', 'Empresa', 'VetDOGUINHO@gmail.com','55110963000136');

insert into Empresa(nome_empresa, senha_empresa, tipo_Usuario, email_empresa, cnpj)
values('Robalo','rOBALOOO10', 'Empresa', 'robalo@pontoFrio.com','55.589.008/0001-98');

select * from empresa;

/*VAGA*/
insert into Vaga (nome_vaga, descricao_vaga, id_empresa) values 
('Est gio Dev Front-End','Est gio para desenvolvedores Front-End. Trabalho presencial, carga hor ria de 6 horas por dia.',9);

insert into Vaga(nome_vaga, descricao_vaga, id_empresa) values 
('Trainee Full Stack Dev','Trainee de devs, ar a full stack, carga hor ria de 6 horas, al m de um sal rio gordo e um futuro promissor.',1);

insert into Vaga(nome_vaga, descricao_vaga, id_empresa) values 
('Trainee de Designer','Trainee de Designer focado no design gr fico para games. Carga hor ria: 6 horas. Sal rio: Um lanche do subway.',7);

insert into Vaga(nome_vaga, descricao_vaga, id_empresa) values 
('Marketing Digital J nior','Contratamos j niors da  rea de marketing digital, para um emprego PJ de 8 horas de carga hor ria',6);

insert into Vaga(nome_vaga, descricao_vaga, id_empresa) values 
('Engenheiro de Software J nior','Empregos para j niors da  rea de engenharia de software. Trabalhao online, CLT.',8);

insert into Vaga(nome_vaga, descricao_vaga, id_empresa) values 
('Trainee Game Design ','Voc s que est o procurando uma nova oportunidade na  rea de Game Design, venham se inscrever para nosso Trainee. 6hrs/dia.',4);

insert into Vaga(nome_vaga, descricao_vaga, id_empresa) values 
('Est gio desenvolvedor Back-End','Requisitos: conhecimento b sico de POO em Java. Est gio de 6 horas di rias, VA e VR inclusos',10);

insert into Vaga(nome_vaga, descricao_vaga, id_empresa) values 
('Desenvolvedor Unreal Engine','Trabalho CLT, deve ter conhecimentos b sicos tamb m de SCRUM',2);

insert into Vaga(nome_vaga, descricao_vaga, id_empresa) values 
('Est gio Desenvolvedor Mobile','Precisamos de mais desenvolvedores mobile, por isso ensinamos e acompanharemos seus aprendizados. Est gio de 6hrs di rias, sal rio e benef cios inclusos.',3);

insert into Vaga(nome_vaga, descricao_vaga, id_empresa) values
('Trainee Designer','Trainee de designer de carga hor ria de 6 horas. Sal rio e benef cios inclusos',5);

select * from Vaga;

/*Candidatura*/

insert into Candidatura(id_candidato, id_vaga) values
(1,2);

insert into Candidatura(id_candidato, id_vaga) values
(1,7);

insert into Candidatura(id_candidato, id_vaga) values
(2,5);

insert into Candidatura(id_candidato, id_vaga) values
(2,8);

insert into Candidatura(id_candidato, id_vaga) values
(3,2);

insert into Candidatura(id_candidato, id_vaga) values
(3,10);

insert into Candidatura(id_candidato, id_vaga) values
(4,3);

insert into Candidatura(id_candidato, id_vaga) values
(4,7);

insert into Candidatura(id_candidato, id_vaga) values
(5,4);

insert into Candidatura(id_candidato, id_vaga) values
(6,1);

insert into Candidatura(id_candidato, id_vaga) values
(6,3);

insert into Candidatura(id_candidato, id_vaga) values
(6,7);

insert into Candidatura(id_candidato, id_vaga) values
(7,1);

insert into Candidatura(id_candidato, id_vaga) values
(7,2);

insert into Candidatura(id_candidato, id_vaga) values
(8,5);

insert into Candidatura(id_candidato, id_vaga) values
(8,9);

insert into Candidatura(id_candidato, id_vaga) values
(9,1);

insert into Candidatura(id_candidato, id_vaga) values
(10,10);

insert into Candidatura(id_candidato, id_vaga) values
(10,6);

insert into Candidatura(id_candidato, id_vaga) values
(10,2);

select * from Candidatura;

/*Fone Candidato*/

insert into FoneCandidato(seq_fone, fone, id_candidato) values
(1, 11987654321, 1);

insert into FoneCandidato(seq_fone, fone, id_candidato) values
(2, 12987654321, 1);

insert into FoneCandidato(seq_fone, fone, id_candidato) values
(1, 1145325825, 2);

insert into FoneCandidato(seq_fone, fone, id_candidato) values
(1, 4318900984, 3);

insert into FoneCandidato(seq_fone, fone, id_candidato) values
(1, 4568138478, 4);

insert into FoneCandidato(seq_fone, fone, id_candidato) values
(1, 1187650987, 5);

insert into FoneCandidato(seq_fone, fone, id_candidato) values
(2, 1287650987, 5);

insert into FoneCandidato(seq_fone, fone, id_candidato) values
(1, 114567384, 6);

insert into FoneCandidato(seq_fone, fone, id_candidato) values
(1, 1134567890, 7);

insert into FoneCandidato(seq_fone, fone, id_candidato) values
(1, 1167845299, 8);

select * from FoneCandidato;

/*Fone Empresa */

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(1,11923455864, 1);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(1,11998235689, 2);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(2,1109876543, 2);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(1,11936925814, 3);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(1,12974185296, 4);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(1,12654987152, 5);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(1,14935795128, 6);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(1,4375961482, 7);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(1,14935197682, 8);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(2,1257965124, 8);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(1,1185294637, 9);

insert into FoneEmpresa(seq_fone, fone, id_empresa) values
(1,1125047800, 10);

select * from FoneEmpresa;

/*Porcentagem*/

insert into Porcentagem(id_candidato, id_vaga) values
(1,2);

insert into Porcentagem(id_candidato, id_vaga) values
(1,7);

insert into Porcentagem(id_candidato, id_vaga) values
(2,5);

insert into Porcentagem(id_candidato, id_vaga) values
(2,8);

insert into Porcentagem(id_candidato, id_vaga) values
(3,2);

insert into Porcentagem(id_candidato, id_vaga) values
(3,10);

insert into Porcentagem(id_candidato, id_vaga) values
(4,3);

insert into Porcentagem(id_candidato, id_vaga) values
(4,7);

insert into Porcentagem(id_candidato, id_vaga) values
(5,4);

insert into Porcentagem(id_candidato, id_vaga) values
(6,1);

insert into Porcentagem(id_candidato, id_vaga) values
(6,3);

insert into Porcentagem(id_candidato, id_vaga) values
(6,7);

insert into Porcentagem(id_candidato, id_vaga) values
(7,1);

insert into Porcentagem(id_candidato, id_vaga) values
(7,2);

insert into Porcentagem(id_candidato, id_vaga) values
(8,5);

insert into Porcentagem(id_candidato, id_vaga) values
(8,9);

insert into Porcentagem(id_candidato, id_vaga) values
(9,1);

insert into Porcentagem(id_candidato, id_vaga) values
(10,10);

insert into Porcentagem(id_candidato, id_vaga) values
(10,6);

insert into Porcentagem(id_candidato, id_vaga) values
(10,2);

select * from Porcentagem;

/*Tags_candidato*/
insert into Tags_Candidato(id_tags, id_candidato) values
(9,1);

insert into Tags_Candidato(id_tags, id_candidato) values
(2,1);

insert into Tags_Candidato(id_tags, id_candidato) values
(1,2);

insert into Tags_Candidato(id_tags, id_candidato) values
(5,3);

insert into Tags_Candidato(id_tags, id_candidato) values
(3,4);

insert into Tags_Candidato(id_tags, id_candidato) values
(7,5);

insert into Tags_Candidato(id_tags, id_candidato) values
(6,6);

insert into Tags_Candidato(id_tags, id_candidato) values
(4,7);

insert into Tags_Candidato(id_tags, id_candidato) values
(5,8);

insert into Tags_Candidato(id_tags, id_candidato) values
(8,9);

insert into Tags_Candidato(id_tags, id_candidato) values
(10,9);

insert into Tags_Candidato(id_tags, id_candidato) values
(1,10);

select * from Tags_Candidato;

/*Tags Vaga*/
insert into Tags_Vaga(id_tags, peso_tag, id_vaga) values
(5,1.0,1);

insert into Tags_Vaga(id_tags, peso_tag, id_vaga) values
(6,1.5,2);

insert into Tags_Vaga(id_tags, peso_tag, id_vaga) values
(7,2.4,3);

insert into Tags_Vaga(id_tags, peso_tag, id_vaga) values
(8,0.7,4);

insert into Tags_Vaga(id_tags, peso_tag, id_vaga) values
(9,1.8,5);

insert into Tags_Vaga(id_tags, peso_tag, id_vaga) values
(10,2.0,6);

insert into Tags_Vaga(id_tags, peso_tag, id_vaga) values
(4,1.2,7);

insert into Tags_Vaga(id_tags, peso_tag, id_vaga) values
(3,3.0,8);

insert into Tags_Vaga(id_tags, peso_tag, id_vaga) values
(2,1.5,9);

insert into Tags_Vaga(id_tags, peso_tag, id_vaga) values
(1,2.6,10);

Select * from tags_Vaga;