package br.com.fiap.ChallengeSprint02.model;

public class Usuario {
	protected String nome;
	protected String usuario;
	protected int telefone;
	protected String email;
	protected String sobreMim;
	protected String senha;
	protected EnumTipoUsuario TipoUsuario;
	protected EnumTipoSituacao SituacaoConta;
	
	public void Cadastrar(String nome, String usuario, int telefone, String email, String sobreMim,
			String senha) {
		this.nome = nome;
		this.usuario = usuario;
		this.telefone = telefone;
		this.email = email;
		this.sobreMim = sobreMim;
		this.senha = senha;
	} 
	
	
	public void Logar(String usuario, String senha) {
		this.usuario = usuario;
		this.senha = senha;		
	}
	
	
	public void Deslogar() {
		this.nome = "";
		this.usuario = "";
		this.senha = "";
		
	}
	
	public void EditarPerfil(String nome, String senha, String usuario) {
		this.nome = nome;
		this.usuario = usuario;
		this.senha = senha;
	}
	
	
	public void ExcluirConta() {
		this.SituacaoConta = EnumTipoSituacao.INATIVA;
	}

}
