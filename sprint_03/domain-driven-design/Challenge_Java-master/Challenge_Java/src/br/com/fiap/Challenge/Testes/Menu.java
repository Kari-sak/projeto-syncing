package br.com.fiap.Challenge.Testes;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import DAO.*;
import br.com.fiap.Challenge.model.*;

public class Menu {
	
	/*---------------------------------------------INSTÂNCIAS-----------------------------------------------*/
	
	Scanner ent = new Scanner(System.in);
	Candidato candidato = new Candidato();
	CandidatoDAO candidatoDAO = new CandidatoDAO();
	Empresa empresa = new Empresa();
	FoneCandidatoDAO foneCandidatoDAO = new FoneCandidatoDAO();
	FoneEmpresaDAO foneEmpresaDAO = new FoneEmpresaDAO();
	EmpresaDAO empresaDAO = new EmpresaDAO();
	VagaDAO vagaDAO = new VagaDAO();
	
	/*---------------------------------------------CADASTROS-----------------------------------------------*/
	
	public void cadastroCandidato() {
			candidato.gerarID();
			System.out.println("Cadastro do candidato:");
			System.out.println("Nome: ");
			String nomeCandidato = ent.next();	
			System.out.println("Cpf:");
			String cpf = ent.next();
			System.out.println("Email: ");
			String emailCandidato = ent.next();
			
			String senhaCandidato = "";
			boolean verificar;
			
			do {
				
				System.out.println("Senha: ");
				senhaCandidato = ent.next();
				System.out.println("Confirme sua senha: ");
				String senhaCandidato2 = ent.next();
				
				verificar = candidato.confirmarSenhaLogin(senhaCandidato,senhaCandidato2);
			}while(verificar==false);
			
			System.out.println("Gênero:\n1. Masculino\n2. Feminino\n3. Não Binário");
			int genero = ent.nextInt();

			
			candidato.cadastrarGenero(genero);		
			
			candidato.cadastrar(nomeCandidato,senhaCandidato,emailCandidato,cpf);
			try {
				candidatoDAO.Inserir(candidato);
			} catch (SQLException e) {
				e.printStackTrace();
			}
			cadastroFone();

	}
	
	public void cadastroEmpresa() {
			System.out.println("Cadastro da empresa:");
			System.out.println("Nome: ");
			String nomeEmpresa = ent.next();
			System.out.println("E-mail:");
			String emailEmpresa = ent.next();
			System.out.println("CNPJ: ");
			String cnpj = ent.next();
			empresa.tipoUsuario();
			
			
			String senhaEmpresa = "";
			boolean verificar = false;
			do {
				System.out.println("Senha: ");
				senhaEmpresa = ent.next();
				System.out.println("Confirme sua senha: ");
				String senhaEmpresa2 = ent.next();
			
				verificar = empresa.confirmarSenhaLogin(senhaEmpresa, senhaEmpresa2);
			}while(verificar ==false);

			empresa.gerarID();
			System.out.println(empresa.getId());
			empresa.cadastrar(nomeEmpresa, emailEmpresa, cnpj, senhaEmpresa);
			try {
				empresaDAO.Inserir(empresa);
			} catch (SQLException e) {
				e.printStackTrace();
			}
			cadastroFoneEmpresa();
		}
	
	public void cadastroVaga() {
		System.out.println("Crie sua vaga:");
		
		System.out.println("Digite o nome da vaga:");
		String nomeVaga = ent.next();
		System.out.println("Digite a descrição:");
		String descricaoVaga = ent.next();
		empresa.criarVaga(nomeVaga,descricaoVaga);
		vagaDAO.Inserir(empresa);

	}	
	
	public void cadastroFone() {
		System.out.println("Quantos telefones você deseja cadastrar?");
		int cont = ent.nextInt();
		List<Fone> listaFone = new ArrayList<>();
		
		for(int i = 0; i<cont;i++) {
			Fone fone = new Fone();
			
			fone.setSequencia(i+1);
			System.out.println("Digite o número:");
			fone.setTelefone(ent.nextInt());
			
			listaFone.add(fone);
			candidato.setTelefones(listaFone);
			
			fone.setCandidato(candidato);
			System.out.println(fone.getCandidato().getId());
			foneCandidatoDAO.inserir(fone);
			

			}
	}
		public void cadastroFoneEmpresa() {
			System.out.println("Quantos telefones você deseja cadastrar?");
			int cont = ent.nextInt();
			List<Fone> listaFone = new ArrayList<>();
			
			for(int i = 0; i<cont;i++) {
				Fone fone = new Fone();
				
				fone.setSequencia(i+1);
				System.out.println("Digite o número:");
				fone.setTelefone(ent.nextInt());
				System.out.println(fone.getTelefone());
				
				fone.setEmpresa(empresa);
				empresa.setTelefones(listaFone);
				foneEmpresaDAO.inserir(fone);
				
				}
		}
		
	/*---------------------------------------------LOGINS-----------------------------------------------*/
	
	public void loginCandidato() {
		boolean verificacao = false;
		do {
			System.out.println("Digite seu e-mail:");
			String emailCandidato = ent.next();
			System.out.println("Digite sua senha:");
			String senhaCandidato = ent.next();
			
			verificacao = candidato.confirmarLogin(emailCandidato, senhaCandidato);
			
		}while(verificacao==false);
		
	
		
	}
	
	public void loginEmpresa() {
		boolean verificacao;
		do {
			System.out.println("Digite seu e-mail:");
			String emailEmpresa = ent.next();
			System.out.println("Digite sua senha:");
			String senhaEmpresa = ent.next();
			
			verificacao = empresa.confirmarLogin(emailEmpresa, senhaEmpresa);
			System.out.println(empresa.confirmarLogin(emailEmpresa, senhaEmpresa));
			
		}while(verificacao==false);
	}
	
	
	
	
}
