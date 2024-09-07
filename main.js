// Exemple basique de WebSocket
const socket = new WebSocket('wss://sockets.streamlabs.com/your-socket-url');

socket.onmessage = function(event) {
  const data = JSON.parse(event.data);
  document.getElementById('message').textContent = 'Nouvel événement reçu : ' + data.message;
};

socket.onopen = function() {
  console.log('WebSocket connecté');
};

socket.onerror = function(error) {
  console.error('Erreur WebSocket:', error);
};
