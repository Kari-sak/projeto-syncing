package br.com.fiap.ChallengeSprint02.model;

public class Funcionario_Empresa extends Usuario{
	
	private int cpf;
	protected Empresa empresa;
	protected Vagas vagas;
	
	public String MostrarDados() {
		return "Seu cpf: " + cpf + ". Seu nome: " + super.nome + ". Seu usuário: " + super.usuario + 
				". Seu telefone: " + super.telefone + ". Seu email: " + super.email + ". Descrição do seu perfil: " + super.sobreMim +
				". Sua senha: " + super.senha;
	}
	
	public int getCpf() {
		return cpf;
	}
	public void setCpf(int cpf) {
		this.cpf = cpf;
	}
	
	
	public void Cadastrar(int cpf) {
		this.cpf = cpf;
	}
	
}
