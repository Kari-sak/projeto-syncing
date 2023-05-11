package br.com.fiap.Challenge.Testes;
import DAO.GerenciadorBD;


public class TesteConexao {
	public static void main(String[] args) {
		if(GerenciadorBD.obterConexao()==null) {
			System.out.println("Falhou a conexão hein");
		}else {
			System.out.println("Deu bom.");
		}
			
	}
	
}
