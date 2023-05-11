package br.com.fiap.ChallengeSprint02.model;

public class Empresa extends Usuario{
	private int cnpj;
	private String atividadeEmpresa;
	protected Funcionario_Empresa revisorEmpresa;
	
	
	public void Cadastrar(int cnpj, String atividadeEmpresa) {
		this.cnpj = cnpj;
		this.atividadeEmpresa = atividadeEmpresa;
	}
	
	public String MostrarDados() {
		return "Seu cnpj: " + cnpj + ". Atividade da empresa: " + atividadeEmpresa + ". Nome: " + super.nome + ". Usuário: " + super.usuario + 
				". Seu telefone: " + super.telefone + ". Seu email: " + super.email + ". Descrição do seu perfil: " + super.sobreMim +
				". Sua senha: " + super.senha;
	}
	

	public int getCnpj() {
		return cnpj;
	}

	public void setCnpj(int cnpj) {
		this.cnpj = cnpj;
	}

	public String getAtividadeEmpresa() {
		return atividadeEmpresa;
	}

	public void setAtividadeEmpresa(String atividadeEmpresa) {
		this.atividadeEmpresa = atividadeEmpresa;
	}
	
	
}
