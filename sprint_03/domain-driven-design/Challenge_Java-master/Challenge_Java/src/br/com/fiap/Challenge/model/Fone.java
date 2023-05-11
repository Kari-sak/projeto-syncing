package br.com.fiap.Challenge.model;

public class Fone {
	private Empresa empresa;
	private Candidato candidato;
	private int sequencia;
	private int telefone;
	
	public Empresa getEmpresa() {
		return empresa;
	}
	
	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}
	
	public Candidato getCandidato() {
		return candidato;
	}
	
	public void setCandidato(Candidato candidato) {
		this.candidato = candidato;
	}
	
	public int getSequencia() {
		return sequencia;
	}
	
	public void setSequencia(int sequencia) {
		this.sequencia = sequencia;
	}
	
	public int getTelefone() {
		return telefone;
	}
	
	public void setTelefone(int telefone) {
		this.telefone = telefone;
	}
	
	
	
}
