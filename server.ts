import express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();
const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on('connection', (webSocket: WebSocket)=>{
  webSocket.on('message', (message: string) => {
    webSocketServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(" " + message);
      }
    });
    // webSocket.send(" " + message);
  });
});

server.listen(4000, () => console.log('Server started'));
