package br.com.fiap.ChallengeSprint02.model;

import java.util.Scanner;

public class Main2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Candidato c = new Candidato();
		Empresa emp = new Empresa();
		Funcionario_Empresa funcEmp = new Funcionario_Empresa();
		Scanner ent = new Scanner(System.in);
		Vagas vagas = new Vagas();
		Skills skills = new Skills();
		
		boolean menu = true;
		int opcao;
		
		do{
			do {System.out.println("~~~~~Soul Coderz~~~~~");
			System.out.println("O que voc� deseja fazer?");
			System.out.println("1- Cadastro. 2-Login 3- Sair do Site");
			System.out.println("(S� FA�A O LOGIN CASO VOC� J� TENHA SE CADASTRADO.)");
			opcao = ent.nextInt();
			}while(!(opcao == 1||opcao == 2||opcao==3));
			
			while(opcao==1) {
				System.out.println("CADASTRO");
				System.out.println("Qual tipo de usu�rio voc� �?");
				System.out.println("1- Candidato. 2- Empresa. 3- Funcionario da Empresa.");
				int tipoUsuario = ent.nextInt();
				if(tipoUsuario==1) {
					System.out.println("CADASTRO CANDIDATO");
					System.out.println("Okay, voc� � um candidato. Digite seu nome:");
					String nomeCandidato = ent.next();
					System.out.println("Agora digite seu usu�rio:");
					String usuarioCandidato = ent.next();
					System.out.println("Digite seu telefone:");
					int telefoneCandidato = ent.nextInt();
					System.out.println("Digite seu e-mail:");
					String emailCandidato = ent.next();
					System.out.println("Digite uma breve descri��o sobre voc� (Sobre mim):");
					String sobreMimCandidato = ent.next();
					System.out.println("Digite sua senha:");
					String senhaCandidato = ent.next();
					System.out.println("Digite seu cpf: ");
					int cpfCandidato = ent.nextInt();
					System.out.println("Digite sua idade: ");
					int idadeCandidato = ent.nextInt();
					System.out.println("Digite seu g�nero: ");
					String generoCandidato = ent.next();
					System.out.println("Digite sua escolaridade: ");
					String escolaridadeCandidato = ent.next();
					
					
					c.Cadastrar(cpfCandidato, idadeCandidato, generoCandidato, escolaridadeCandidato);
					c.Cadastrar(nomeCandidato, usuarioCandidato, telefoneCandidato, emailCandidato, sobreMimCandidato, senhaCandidato);
					System.out.println("SEUS DADOS: " +  c.MostrarDados());
					
					System.out.println("Voc� deseja fazer o login?");
					System.out.println("1-Sim. 2-N�o");
					opcao = ent.nextInt();
				}
				else if(tipoUsuario==2) {
					System.out.println("CADASTRO EMPRESA");
					System.out.println("Okay, voc� cadastrar� uma empresa. Digite o nome:");
					String nomeEmpresa = ent.next();
					System.out.println("Agora digite o usu�rio da Empresa:");
					String usuarioEmpresa = ent.next();
					System.out.println("Digite seu telefone:");
					int telefoneEmpresa = ent.nextInt();
					System.out.println("Digite seu e-mail:");
					String emailEmpresa = ent.next();
					System.out.println("Digite uma breve descri��o sobre voc� (Sobre mim):");
					String sobreMimEmpresa = ent.next();
					System.out.println("Digite sua senha:");
					String senhaEmpresa = ent.next();
					System.out.println("Digite o cnpj: ");
					int cnpj = ent.nextInt();
					System.out.println("Digite a atividade da empresa (�rea):");
					String atividadeEmpresa = ent.next();
					
					emp.Cadastrar(cnpj, atividadeEmpresa);
					emp.Cadastrar(nomeEmpresa, usuarioEmpresa, telefoneEmpresa, emailEmpresa, sobreMimEmpresa, senhaEmpresa);
					
					System.out.println("SEUS DADOS: " + emp.MostrarDados());
					
					System.out.println("Voc� deseja fazer o login?");
					System.out.println("1-Sim. 2-N�o");
					opcao = ent.nextInt();
				}
				else if(tipoUsuario==3) {
					System.out.println("CADASTRO FUNCION�RIO DA EMPRESA");
					System.out.println("Okay, voc� � um funcion�rio de uma empresa. Digite seu nome:");
					String nomeFuncEmp = ent.next();
					System.out.println("Agora digite seu usu�rio:");
					String usuarioFuncEmp = ent.next();
					System.out.println("Digite seu telefone:");
					int telefoneFuncEmp = ent.nextInt();
					System.out.println("Digite seu e-mail:");
					String emailFuncEmp = ent.next();
					System.out.println("Digite uma breve descri��o sobre voc� (Sobre mim):");
					String sobreMimFuncEmp = ent.next();
					System.out.println("Digite sua senha:");
					String senhaFuncEmp = ent.next();
					System.out.println("Digite seu cpf: ");
					int cpfFuncEmp = ent.nextInt();
					
					funcEmp.Cadastrar(cpfFuncEmp);
					funcEmp.Cadastrar(nomeFuncEmp, usuarioFuncEmp, telefoneFuncEmp, emailFuncEmp, sobreMimFuncEmp, senhaFuncEmp);
					
					System.out.println("SEUS DADOS: " + funcEmp.MostrarDados());
					
					System.out.println("Voc� deseja fazer o login?");
					System.out.println("1-Sim. 2-N�o");
					opcao = ent.nextInt();
				}
				
				if(tipoUsuario==1&&opcao==1) {
					System.out.println("LOGIN CANDIDATO");
					int cont1 = 0;
					while(cont1<3) {
						System.out.println("Digite seu usu�rio:");
						String usuarioCandidato = ent.next();
						System.out.println("Digite sua senha:");
						String senhaCandidato = ent.next();
						if(c.usuario.equals(usuarioCandidato)&& c.senha.equals(senhaCandidato)) {
							System.out.println("Voc� foi logado com sucesso");
							c.Logar(usuarioCandidato, senhaCandidato);
							break;
						}else {
							System.out.println("Voc� errou seu usuario ou senha");
							cont1+=1;
						}
					}
					
					while(cont1>=3) {
						System.out.println("Voc� errou seu login mais de tr�s vezes. Espere 5 minutos para logar novamente.");
						opcao = 3;
						break;
					}
					if(cont1<3) {
						System.out.println("Login efetuado. Deseja sair do site? 1- Sim 2- N�o");
						opcao = ent.nextInt();
						if(opcao==1) {
							opcao = 3;
						}else {
							opcao = 4;
						}
					}
				}
				
				else if(tipoUsuario==2&&opcao==1) {
					System.out.println("LOGIN EMPRESA");
					int cont1 = 0;
					while(cont1<3) {
						System.out.println("Digite seu usu�rio:");
						String usuarioEmpresa = ent.next();
						System.out.println("Digite sua senha:");
						String senhaEmpresa = ent.next();

						if(emp.usuario.equals(usuarioEmpresa)&& emp.senha.equals(senhaEmpresa)) {
							System.out.println("Voc� foi logado com sucesso");
							emp.Logar(usuarioEmpresa, senhaEmpresa);
							break;
						}else {
							System.out.println("Voc� errou seu login ou usuario. ");
							cont1+=1;
						}
					}
					
					while(cont1>=3) {
						System.out.println("Voc� errou seu login mais de tr�s vezes. Espere 5 minutos para logar novamente.");
						opcao = 3;
						break;
					}
					if(cont1<3) {
						System.out.println("Login efetuado. Deseja sair do site? 1- Sim 2- N�o");
						opcao = ent.nextInt();
						if(opcao==1) {
							opcao = 3;
						}else {
							opcao = 4;
						}
					}
		
				}
				else if(tipoUsuario==3&&opcao==1) {
					System.out.println("LOGIN FUNCION�RIO DA EMPRESA");
					int cont1 = 0;
					while(cont1<3) {
						System.out.println("Digite seu usu�rio:");
						String usuarioFuncEmp = ent.next();
						System.out.println("Digite sua senha:");
						String senhaFuncEmp = ent.next();

						if(funcEmp.usuario.equals(usuarioFuncEmp)&& funcEmp.senha.equals(senhaFuncEmp)) {
							System.out.println("Voc� foi logado com sucesso");
							funcEmp.Logar(usuarioFuncEmp, senhaFuncEmp);
							break;
						}else {
							System.out.println("Voc� errou seu login ou usuario. ");
							cont1+=1;
						}
					}
					
					while(cont1>=3) {
						System.out.println("Voc� errou seu login mais de tr�s vezes. Espere 5 minutos para logar novamente.");
						opcao = 3;
						break;
					}
					
					if(cont1<3) {
						System.out.println("Login efetuado. Deseja sair do site? 1- Sim 2- N�o");
						opcao = ent.nextInt();
						if(opcao==1) {
							opcao = 3;
						}else {
							opcao = 4;
						}
					}
				
					
			/*--------------------------------------------------------------------------------------*/
				
				}else if(opcao==2) {
					/*DEPOIS DO CADASTRO VC N�O QUIS FAZER LOGIN");*/
					System.out.println("Voc� deseja sair(1) ou ir ao menu principal(2)?");
					int answer = ent.nextInt();
					if(answer==1){
						opcao = 3;
					}else {
						opcao = 4;
					}
					
				}
			}
			
			/*--------------------------------------------------------------------------------------*/
			
			
			while(opcao==2) {
				System.out.println("LOGIN");
				System.out.println("Qual tipo de usu�rio voc� �?");
				System.out.println("1- Candidato. 2- Empresa. 3- Funcionario Empresa");
				int tipoUsuario = ent.nextInt();
				
				
			/*--------------------------------------------------------------------------------------*/
				
				if(tipoUsuario==1) {
					System.out.println("LOGIN CANDIDATO");
					int cont1 = 0;
					while(cont1<3) {
						System.out.println("Digite seu usu�rio:");
						String usuarioCandidato = ent.next();
						System.out.println("Digite sua senha:");
						String senhaCandidato = ent.next();
						if(c == null) {
							System.out.println("ERRO");
						}
						if(c.usuario.equals(usuarioCandidato)&& c.senha.equals(senhaCandidato)){
							System.out.println("Voc� foi logado com sucesso");
							break;
						}else {
							System.out.println("Voc� errou seu login ou usuario.");
							cont1+=1;
						}
					}
					
					while(cont1>=3) {
						System.out.println("Voc� errou seu login mais de tr�s vezes. Espere 5 minutos para logar novamente.");
						opcao = 3;
						break;
					}
				
					
					if(cont1<3) {
						System.out.println("Voc� deseja sair(1) ou ir ao menu principal(2)?");
						int answer = ent.nextInt();
						if(answer==1){
								opcao = 3;
						}else {
								opcao = 4;
						}
					}
				}
				
				
				/*--------------------------------------------------------------------------------------*/
				
				
				else if(tipoUsuario==2) {
					System.out.println("LOGIN EMPRESA");
					int cont1 = 0;
					while(cont1<3) {
						System.out.println("Digite seu usu�rio:");
						String usuarioEmpresa = ent.next();
						System.out.println("Digite sua senha:");
						String senhaEmpresa = ent.next();
						if(emp == null){
							System.out.println("Erro.");/**/
						}
						else if(emp.usuario.equals(usuarioEmpresa)&& emp.senha.equals(senhaEmpresa)) {
							System.out.println("Voc� foi logado com sucesso");
							emp.Logar(usuarioEmpresa, senhaEmpresa);
							break;
						}
						else{
							System.out.println("Voc� errou seu login ou usuario.");
							cont1+=1;
							}
						}
					
				
					while(cont1>=3) {
						System.out.println("Voc� errou seu login mais de tr�s vezes. Espere 5 minutos para logar novamente.");
						opcao = 3;
						break;
					}
					
					if(cont1<3) {
						System.out.println("Voc� deseja sair(1) ou ir ao menu principal(2)?");
						int answer = ent.nextInt();
						if(answer==1){
								opcao = 3;
						}else {
								opcao = 4;
						}
					}
				}
				
				
				/*--------------------------------------------------------------------------------------*/
				
				
				
				
				else if(tipoUsuario==3) {
					System.out.println("LOGIN FUNCION�RIO EMPRESA");
					int cont1 = 0;
					while(cont1<3) {
						System.out.println("Digite seu usu�rio:");
						String usuarioFuncEmp = ent.next();
						System.out.println("Digite sua senha:");
						String senhaFuncEmp = ent.next();
						
						if(funcEmp.usuario.equals(usuarioFuncEmp)&& funcEmp.senha.equals(senhaFuncEmp)) {
							System.out.println("Voc� foi logado com sucesso");
							funcEmp.Logar(usuarioFuncEmp, senhaFuncEmp);
							break;
						}else {
							System.out.println("Voc� errou seu login ou usuario.");
							cont1+=1;
						}
					}
					
					System.out.println("Voc� deseja sair(1) ou ir ao menu principal(2)?");
					int answer = ent.nextInt();
					if(answer==1){
					opcao = 3;
					}else {
					opcao = 4;
					}
				}
		
			}
			
			
			while(opcao==3) {
			System.out.println("Muito Obrigado por visitar nosso site!");
			menu=false;
			break;
			}
			
			while(opcao==4) {
				menu=true;
				break;
			}
			
		}while(menu==true);
		
	}

}
/*(>_<)*/
