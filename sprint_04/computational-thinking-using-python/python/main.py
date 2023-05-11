#https://drive.google.com/file/d/1l1HpVc_c8i6YbIMG7oKARl3uriZaRsri/view

from funcoes import *
while True:
    # Menu Principal
    while True:
        cls()
        opcao = menuPrincipal()
        
        if opcao == 1:
            isCandidato = login()
            break
        
        if opcao == 2:
            cadastrarUsuario()
            
    # Menu Candidato ou Empresa
    if isCandidato != None:
        if isCandidato[0]:
            while True:
                cls()
                opcao = menuCandidato(isCandidato[0], isCandidato[1])
                
                if opcao == 1:
                    atualizarPerfil(isCandidato[0])
                
                if opcao == 2:
                    candidatar()
                    
                if opcao == 3:
                    break
        elif not isCandidato[0]:
            while True:
                cls()
                opcao = menuEmpresa(isCandidato[0], isCandidato[1])
                
                if opcao == 1:
                    atualizarPerfil(isCandidato[0])
                
                if opcao == 2:
                    cadastrarVaga()
                    
                if opcao == 3:
                    break