const FtpSrv = require('ftp-srv');
const fs = require('fs');

const server = new FtpSrv({
  url: 'ftp://10.0.0.13:21', // Defina a URL do servidor FTP
//  pasv_url: 'ftp://seu_ip_externo:porta', // Substitua pelo seu IP externo e porta (opcional, apenas se o servidor estiver por trás de um NAT)
});

// Evento para quando um cliente FTP se conecta ao servidor
server.on('login', ({connection, username, password}, resolve, reject) => {
  // Verifique as credenciais do cliente FTP aqui
  if (username === 'anonimo') {
    resolve({ root: './base' }); // Defina o diretório raiz para o usuário (onde os arquivos serão armazenados)
  } else {
    reject(new Error('Credenciais inválidas.'));
  }
});

// Evento para quando um arquivo é enviado ao servidor FTP
server.on('STOR', async ({connection, filename, destination}) => {
  const fullPath = destination;
  const writeStream = fs.createWriteStream(fullPath);

  connection.pipe(writeStream);

  await new Promise((resolve, reject) => {
    connection.on('close', resolve);
    connection.on('error', reject);
  });
});

// Inicie o servidor FTP
server.listen()
  .then(() => {
    console.log('Servidor FTP iniciado');
  })
  .catch((err) => {
    console.error('Erro ao iniciar o servidor FTP:', err);
  });
