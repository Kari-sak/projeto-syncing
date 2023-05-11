package br.com.fiap.Challenge.Testes;

public class Teste {
	public static void main(String[] args) {
		Menu menu = new Menu();
		
		try {
			menu.cadastroCandidato();

			menu.cadastroEmpresa();
			
			menu.cadastroVaga();
			
		}catch(NullPointerException npe) {
			npe.printStackTrace();
			System.err.println("Este atributo é obrigatório.");
		}catch(NumberFormatException nfe) {
			System.err.println("Você não pode utilizar este tipo de dado.");
		}finally {
			System.out.println("Muito obrigado por visitar nosso site :)");
		}

		
	}

	
	
	
}

