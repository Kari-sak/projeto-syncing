package br.com.fiap.ChallengeSprint02.model;
import java.util.List;

public class Vagas {
	private long idVaga;
	private String nomeVaga;
	private String descricaoVaga;
	private List<Skills> skillsRequeridas;
	private String fotoVaga;
	protected Funcionario_Empresa funcionario_empresa;
	
	
	
	public long getId() {
		return idVaga;
	}

	public void setId(long idVaga) {
		this.idVaga = idVaga;
	}

	public String getNomeVaga() {
		return nomeVaga;
	}

	public void setNomeVaga(String nomeVaga) {
		this.nomeVaga = nomeVaga;
	}

	public String getDescricaoVaga() {
		return descricaoVaga;
	}

	public void setDescricaoVaga(String descricaoVaga) {
		this.descricaoVaga = descricaoVaga;
	}

	public List<Skills> getSkillsRequeridas() {
		return skillsRequeridas;
	}

	public void setSkillsRequeridas(List<Skills> skillsRequeridas) {
		this.skillsRequeridas = skillsRequeridas;
	}

	public String getFotoVaga() {
		return fotoVaga;
	}

	public void setFotoVaga(String fotoVaga) {
		this.fotoVaga = fotoVaga;
	}

	public void adicionarVaga(long idVaga, String nomeVaga, String descricaoVaga, List<Skills> skillrequeridas) {
		this.idVaga = idVaga;
		this.nomeVaga = nomeVaga;
		this.descricaoVaga = descricaoVaga;
		/*this.skillsRequeridas = skillsrequeridas;*/
	
	}
	
	public void alterarVaga (long idVaga, String nomeVaga, String descricaoVaga) {
		this.idVaga = idVaga;
		this.nomeVaga = nomeVaga;
		this.descricaoVaga = descricaoVaga;
	}
	
	
	public void removerVaga() {
		this.idVaga = 0;
		this.nomeVaga = "";
		this.descricaoVaga = "";
	}

}
