package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import br.com.fiap.Challenge.model.Empresa;
import br.com.fiap.Challenge.model.Fone;

public class EmpresaDAO {
	private Connection conexao;
	
	public void Inserir(Empresa empresa) throws SQLException{
		conexao = GerenciadorBD.obterConexao();
		PreparedStatement SQL = null;
		
		try {
			SQL = conexao.prepareStatement("INSERT INTO Empresa (id_empresa, nome_empresa, senha_empresa, email_empresa, tipo_Usuario, cnpj) VALUES(?,?,?,?,?,?)");
			
			SQL.setString(1, empresa.getId());
			SQL.setString(2, empresa.getNome());
			SQL.setString(3, empresa.getSenha());
			SQL.setString(4, empresa.getEmail());
			SQL.setString(5, empresa.tipoUsuario());
			SQL.setString(6, empresa.getCnpj());
			
			SQL.executeUpdate();

			SQL.close();			
			conexao.close();
		}catch(SQLException e) {
			e.printStackTrace();
		}
	}
	
	
}
