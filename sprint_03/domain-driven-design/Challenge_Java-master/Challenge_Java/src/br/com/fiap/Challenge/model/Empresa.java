package br.com.fiap.Challenge.model;

//import java.util.ArrayList;

public class Empresa extends Usuario{
	private String cnpj;
	private Vaga vaga;
//	private ArrayList<Vaga> minhasVagas;
	
	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}


	public Vaga getVaga() {
		return vaga;
	}

	public void setVaga(Vaga vaga) {
		this.vaga = vaga;
	}

//	public ArrayList<Vaga> getMinhasVagas() {
//		return minhasVagas;
//	}
//
//	public void setMinhasVagas(ArrayList<Vaga> minhasVagas) {
//		this.minhasVagas = minhasVagas;
//	}

	@Override
	public String tipoUsuario() {
		setTipoUsuario(EnumTipoUsuario.EMPRESA);
		return "Empresa";
	}
	
	public void cadastrar(String nome, String email,String CNPJ, String senha) {
		super.setNome(nome);
		super.setEmail(email);
		setCnpj(CNPJ);
		setSenha(senha);
	}
	
	public void criarVaga(String nome, String descricao) {
		vaga = new Vaga();
		vaga.gerarId();
		vaga.setNome(nome);
		vaga.setDescricao(descricao);
		vaga.setEmpresa(this);

	}
	
//	public void mostrarMinhasVagas() {
//		for(int i =0 ; i<minhasVagas.size();i++) {
//			System.out.println("Vagas criadas: "+minhasVagas.get(i));
//		}
//	}

}


