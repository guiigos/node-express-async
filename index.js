import http from 'http';
import app from './src/app.js';

const server = http.createServer(app);
server.listen(3000 || process.env.PORT);
