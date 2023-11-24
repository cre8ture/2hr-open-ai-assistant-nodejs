import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import path from 'path';
import axios from 'axios';

import assistantRouter from './routes/assistants_route.mjs';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use('/', assistantRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));
console.log("i am path", path.join(__dirname, 'public'), path.join(__dirname, 'public', 'index.html'));


io.on('connection', (socket) => {
  socket.on('message', async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/assistant', data);
      socket.emit('response', response.data);
    } catch (err) {
      console.error(err);
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});