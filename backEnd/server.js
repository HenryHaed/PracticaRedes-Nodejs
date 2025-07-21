const http = require('http');
const pool = require('./db'); // Conexión a MySQL local (XAMPP)
const PORT = 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Encabezados CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar preflight
  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    let data = {};
    try {
      data = JSON.parse(body);
    } catch (e) {
      // Si el JSON es inválido, respondemos con 400
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'JSON inválido' }));
      return;
    }

    if (url === '/api/formulario') {
      switch (method) {
        case 'POST':
          try {
            await pool.execute(
              'INSERT INTO formularios (nombre, email, mensaje) VALUES (?, ?, ?)',
              [data.nombre, data.email, data.mensaje]
            );
            console.log('Datos guardados en la base de datos:', data);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ mensaje: 'Formulario guardado correctamente' }));
          } catch (err) {
            console.error('Error al guardar en la base de datos:', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Error al guardar en la base de datos' }));
          }
          break;

        case 'PUT':
          console.log('PUT recibido:', data);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ mensaje: 'Datos actualizados (simulado)' }));
          break;

        case 'PATCH':
          console.log('PATCH recibido:', data);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ mensaje: 'Datos modificados parcialmente (simulado)' }));
          break;

        case 'DELETE':
          console.log('DELETE recibido');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ mensaje: 'Elemento eliminado (simulado)' }));
          break;

        default:
          res.writeHead(405, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Método no permitido' }));
          break;
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor HTTP escuchando en http://localhost:${PORT}`);
});
