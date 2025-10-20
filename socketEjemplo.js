import io from 'socket.io-client';

const socket = io('https://mi-servidor.com');

socket.on('connect', () => {
  console.log('Conectado al servidor');
});

socket.on('mensaje', (data) => {
  console.log('Mensaje recibido:', data);
});

socket.emit('nuevoMensaje', { texto: 'Hola desde Expo' });
