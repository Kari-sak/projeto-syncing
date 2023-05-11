package br.com.fiap.ChallengeSprint02.model;

import java.util.List;

public class Candidato extends Usuario{
	private int cpf;
	private int idade;
	private String genero;
	private String situacaoMilitar;
	private String escolaridade;
	protected List<Skills> skillsCandidato;
	
	
	public void Cadastrar(int cpf, int idade, String genero, String escolaridade) {
		this.cpf = cpf;
		this.idade = idade;
		this.genero = genero;
		this.escolaridade = escolaridade;
	}
	
	public String MostrarDados() {
		return "Seu cpf: " + cpf + ". Sua idade: " + idade +  ". Seu genero: " + genero + 
				". Sua escolaridade: " + escolaridade + ". Seu nome: " + super.nome + ". Seu usuário: " + super.usuario + 
				". Seu telefone: " + super.telefone + ". Seu email: " + super.email + ". Descrição do seu perfil: " + super.sobreMim +
				". Sua senha: " + super.senha +  "!!";
	}
	
	
	public int getCpf() {
		return cpf;
	}
	
	public void setCpf(int cpf) {
		this.cpf = cpf;
	}
	
	public int getIdade() {
		return idade;
	}
	
	public void setIdade(int idade) {
		this.idade = idade;
	}
	
	public String getGenero() {
		return genero;
	}
	public void setGenero(String genero) {
		this.genero = genero;
	}
	
	public String getSituacaoMilitar() {
		return situacaoMilitar;
	}
	
	public void setSituacaoMilitar(String situacaoMilitar) {
		this.situacaoMilitar = situacaoMilitar;
	}
	
	public String getEscolaridade() {
		return escolaridade;
	}
	
	public void setEscolaridade(String escolaridade) {
		this.escolaridade = escolaridade;
	}


	
	

}
