import http from 'http';
import config from './api/config/config.js';
import api from './api/api.js';

const server = http.createServer(api);

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`El puerto ${config.server.port} ya está siendo usado por otra aplicación`);
  }
  console.error(`Error al iniciar servidor en el puerto ${config.server.port}🔴`);
});

server.on('listening', () => {
  console.log(`Servidor escuchando 🟢 en el puerto ${config.server.port}`);
});

server.listen(config.server.port);