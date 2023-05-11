package br.com.fiap.Challenge.model;

import java.util.ArrayList;
import java.util.Random;

public class Vaga {
	private String id;
	private String nome;
	private String descricao;
//	private ArrayList<Tags> tagsVaga;
	private Empresa empresa;
	private ArrayList<Candidato> candidatosInscritos;
	private ArrayList<Vaga> todasVagas;
	
	Random random =new Random();
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

//	public ArrayList<Tags> getTagsVaga() {
//		return tagsVaga;
//	}
//
//	public void setTagsVaga(ArrayList<Tags> tagsVaga) {
//		this.tagsVaga = tagsVaga;
//	}

	public Empresa getEmpresa() {
		return empresa;
	}
	
	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public ArrayList<Candidato> getCandidatosInscritos() {
		return candidatosInscritos;
	}

	public void setCandidatosInscritos(ArrayList<Candidato> candidatosInscritos) {
		this.candidatosInscritos = candidatosInscritos;
	}

	public ArrayList<Vaga> getTodasVagas() {
		return todasVagas;
	}

	public void setTodasVagas(ArrayList<Vaga> todasVagas) {
		this.todasVagas = todasVagas;
	}

	public String gerarId() {
		id = "V" + random.nextInt(999);
		return id;
	}
	

}
