package br.com.fiap.ChallengeSprint02.model;

public class Skills {
	private long idSkill;
	private String nomeSkill;
	protected EnumNivelSkill nivelSkill;
	
	public void adicionarSkill(long idSkill, String nomeSkill) {
		this.idSkill = idSkill;
		this.nomeSkill = nomeSkill;
	}
	
	
	public long getIdSkill() {
		return idSkill;
	}
	public void setIdSkill(long idSkill) {
		this.idSkill = idSkill;
	}
	public String getNomeSkill() {
		return nomeSkill;
	}
	public void setNomeSkill(String nomeSkill) {
		this.nomeSkill = nomeSkill;
	}
	
	

}
