# FTP Server

## Projeto desenvolvido em NodeJS para iniciar um servidor FTP simples

# Inicialização

- Clone esse repositório para seu repositório local
- Certifique-se de ter a ultima versão instalada do NodeJS e instalador de pacotes NPM
- Abra o CMD e acesse a pasta que contem o arquivo package.json
- Utilize o comando <code>npm i</code> para instalar as dependências do projeto
- Após a instalação concluída, utilize <code>node index</code> para iniciar o servidor

# Teste

- Abra um novo CMD
- Acesse a pasta onde se encontra o arquivo que deseja enviar ao servidor FTP
- Utilize o comando <code>ftp localhost</code> substituindo 'localhost' pelo ip iniciado o servidor (10.0.0.13 no codigo original)
- Acesse o usuário 'anonimo'
- Use qualquer senha com ao menos 3 caracteres, não deixe em branco
- Utilize o comando <code>put teste.txt</code> substituindo 'teste.txt' pelo nome do arquivo que deseja enviar
- Após o envio bem sucedido, pode utilizar o comando <code>ls</code> para listar os arquivos em seu servidor FTP
- Utilize <code>quit</code> para sair da conexão FTP pelo lado cliente

# Implementações Futuras

- Permitir o cadastro de novos usuários
- Permitir a criação automatica de novas pastas para guardar arquivos de novos usuarios
- Realizar procedimentos de segurança
