def menu():
  print('Funcionalidades do Sistema:')
  print('-' * 28)
  print('1. Cadastro')
  print('2. Login')
  print('3. Área do Candidato')
  print('4. Área Empresa')
  print('5. RH')
  print('6. Sair')

  while True:

      opcao = int(input('Escolha sua opção: '))
      if opcao == 1:
        cadastro()
        break
    
      elif opcao == 2:
        login()
        break

      elif opcao == 3:
        candidato()
        break

      elif opcao == 4:
        empresa()
        break

      elif opcao == 5:
        rh()
        break

      elif opcao == 6:
        break

      else:
        print('Opção inválida. Digite 1-6')
        menu()
    

def cadastro():
  print('Entrou na Página de Cadastro - Bem Vindo!')
  anykey = input("Pressione Enter para retornar ao Menu ")
  print('-' * 47)
  menu()

def login():
  print("Entrou na Página de Login - Bem Vindo!")
  anykey = input("Pressione Enter para retornar ao Menu ")
  print('-' * 47)
  menu()

def candidato():
  print("Entrou na Página da área do Candidato - Bem Vindo!")
  anykey = input("Pressione Enter para retornar ao Menu ")
  print('-' * 47)
  menu()

def empresa():
  print("Entrou na Página da Área da Empresa - Bem Vindo!")
  anykey = input("Pressione Enter para retornar ao Menu ")
  print('-' * 47)
  menu()

def rh():
  print("Entrou na Página da área do RH - Bem Vindo!")  
  anykey = input("Pressione Enter para retornar ao Menu ")
  print('-' * 47)
  menu()

menu()