const socket = io();

// Manejar el evento 'connected' emitido desde el servidor
socket.on('connected', (message) => {
    console.log(message);
});

// Esta función hace una solicitud GET al servidor Express
async function getData() {
    try {
        const response = await fetch('/getDistance'); // Realiza la solicitud GET al servidor
        const data = await response.json(); // Obtiene los datos en formato JSON

        // Muestra los datos en la página HTML
        document.getElementById('Distancia').innerText = `${data.quality} cm`;
    } catch (error) {
        console.error('Error al obtener los datos del sensor de distancia:', error);
    }

}

async function getGirar() {
    try {
        const response = await fetch('/getGirar'); // Realiza la solicitud GET al servidor
        const data = await response.json(); // Obtiene los datos en formato JSON

        // Muestra los datos en la página HTML
        document.getElementById('Abrir').innerText = `${data.quality}`;
    } catch (error) {
        console.error('Error al mandar la peticion', error);
    }

}