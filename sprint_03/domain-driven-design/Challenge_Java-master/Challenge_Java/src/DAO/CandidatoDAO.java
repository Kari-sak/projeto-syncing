package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import java.util.List;

import br.com.fiap.Challenge.model.Candidato;


public class CandidatoDAO {
	private Connection conexao;
	
	public void Inserir(Candidato candidato) throws SQLException{
		conexao = GerenciadorBD.obterConexao();
		PreparedStatement SQL = null;
		
		try {
			SQL = conexao.prepareStatement("INSERT INTO Candidato (id_candidato, nome_candidato, senha_candidato, tipo_Usuario, email_candidato, cpf, genero_candidato) VALUES(?,?,?,?,?,?,?)");
			SQL.setString(1, candidato.getId());
			SQL.setString(2, candidato.getNome());
			SQL.setString(3, candidato.getSenha());
			SQL.setString(4, candidato.tipoUsuario());
			SQL.setString(5, candidato.getEmail());
			SQL.setString(6, candidato.getCpf());
			SQL.setString(7, candidato.retornarGenero());
			
			
			SQL.executeUpdate();
			conexao.close();
			SQL.close();
			
		}catch(SQLException e) {
			e.printStackTrace();
		}
	}
	
	public List<Candidato> listar(){
		
		List<Candidato> listaCandidatos = new ArrayList<>();
		conexao = GerenciadorBD.obterConexao();
		PreparedStatement SQL = null;
		ResultSet rs = null;
		
		try {
			SQL = conexao.prepareStatement("SELECT * FROM Candidato");
			rs = SQL.executeQuery();
			
			while(rs.next()) {
				String id = rs.getString("id_candidato");
				String nome = rs.getString("nome_candidato");
				String senha = rs.getString("senha_candidato");
				String tipoUsuario = rs.getString("tipo_Usuario");
				String email = rs.getString("email_candidato");
				String cpf = rs.getString("cpf");
				String genero = rs.getString("genero_candidato");
				
				Candidato candidato = new Candidato(id, nome, senha, tipoUsuario, email, cpf, genero);
				listaCandidatos.add(candidato);
			}
			
		SQL.close();
		rs.close();
		conexao.close();
			
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		return listaCandidatos;
		
	}
	

}
