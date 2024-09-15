<<<<<<< HEAD
// Función para cargar las cartas en la página y activar las primeras 4
function cargarCartas() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Guardamos las cartas del JSON en el array global
            cartas = data;

            const gameBoard = document.querySelector('.game-board');
            gameBoard.innerHTML = '';  // Limpiar el tablero

            // Cargar todas las cartas en el tablero
            for (let i = 1; i <= 13; i++) {
                const img = document.createElement('img');
                img.src = `img/img/${i}.png`;  // Asignar la imagen correspondiente a cada carta
                img.alt = `Carta ${i}`;
                img.classList.add('card');
                img.setAttribute('data-numero', i);

                // Si la carta está en el JSON, activar el contador al hacer clic
                const cartaEnJson = cartas.find(c => c.numero === String(i));
                if (cartaEnJson) {
                    img.addEventListener('click', () => actualizarContador(cartaEnJson));
                }

                gameBoard.appendChild(img);
            }

            // Mostrar las cartas con cantidad en la tabla
            actualizarTabla();
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
}

// Función para actualizar la tabla de puntuaciones
function actualizarTabla() {
    const scoreTable = document.querySelector('.score-table table');
    scoreTable.innerHTML = `<tr>
        <th>Carta</th>
        <th>Cant</th>
    </tr>`;  // Limpiar la tabla

    cartas.forEach(carta => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${carta.carta}</td>
            <td id="cantidad-${carta.numero}">${carta.cantidad}</td>
        `;
        scoreTable.appendChild(row);
    });
}

// Función para actualizar el contador al hacer clic en una carta
function actualizarContador(carta) {
    carta.cantidad += 1;
    document.getElementById(`cantidad-${carta.numero}`).textContent = carta.cantidad;
}

// Función para habilitar una carta existente desde el formulario
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const numero = document.getElementById('numero').value;
    const nombreCarta = document.getElementById('carta').value;

    // Unir el número y el nombre de la carta
    const cartaCompleta = `${numero} ${nombreCarta}`;

    // Verificar si la carta ya está en el array global
    let cartaExistente = cartas.find(c => c.numero === numero);
    
    if (cartaExistente) {
        // Si ya existe, solo habilitamos el clic para esa carta
        alert(`La carta ${cartaCompleta} ya está habilitada.`);
    } else {
        // Si no está en el array, agregarla
        cartaExistente = {
            numero: numero,
            carta: cartaCompleta,
            cantidad: 0
        };
        cartas.push(cartaExistente);
    }

    // Buscar la carta en el tablero por su número
    const img = document.querySelector(`img[data-numero="${numero}"]`);
    if (img) {
        img.addEventListener('click', () => actualizarContador(cartaExistente));
        actualizarTabla();  // Actualizar la tabla con la nueva carta habilitada
    } else {
        alert('Carta no encontrada en el tablero');
    }

    // Limpiar los campos del formulario después de guardar
    document.getElementById('numero').value = '';
    document.getElementById('carta').value = '';
});

// Cargar las cartas al inicio
cargarCartas();
=======
// Función para cargar las cartas en la página y activar las primeras 4
function cargarCartas() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Guardamos las cartas del JSON en el array global
            cartas = data;

            const gameBoard = document.querySelector('.game-board');
            gameBoard.innerHTML = '';  // Limpiar el tablero

            // Cargar todas las cartas en el tablero
            for (let i = 1; i <= 13; i++) {
                const img = document.createElement('img');
                img.src = `img/img/${i}.png`;  // Asignar la imagen correspondiente a cada carta
                img.alt = `Carta ${i}`;
                img.classList.add('card');
                img.setAttribute('data-numero', i);

                // Si la carta está en el JSON, activar el contador al hacer clic
                const cartaEnJson = cartas.find(c => c.numero === String(i));
                if (cartaEnJson) {
                    img.addEventListener('click', () => actualizarContador(cartaEnJson));
                }

                gameBoard.appendChild(img);
            }

            // Mostrar las cartas con cantidad en la tabla
            actualizarTabla();
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
}

// Función para actualizar la tabla de puntuaciones
function actualizarTabla() {
    const scoreTable = document.querySelector('.score-table table');
    scoreTable.innerHTML = `<tr>
        <th>Carta</th>
        <th>Cant</th>
    </tr>`;  // Limpiar la tabla

    cartas.forEach(carta => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${carta.carta}</td>
            <td id="cantidad-${carta.numero}">${carta.cantidad}</td>
        `;
        scoreTable.appendChild(row);
    });
}

// Función para actualizar el contador al hacer clic en una carta
function actualizarContador(carta) {
    carta.cantidad += 1;
    document.getElementById(`cantidad-${carta.numero}`).textContent = carta.cantidad;
}

// Función para habilitar una carta existente desde el formulario
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const numero = document.getElementById('numero').value;
    const nombreCarta = document.getElementById('carta').value;

    // Unir el número y el nombre de la carta
    const cartaCompleta = `${numero} ${nombreCarta}`;

    // Verificar si la carta ya está en el array global
    let cartaExistente = cartas.find(c => c.numero === numero);
    
    if (cartaExistente) {
        // Si ya existe, solo habilitamos el clic para esa carta
        alert(`La carta ${cartaCompleta} ya está habilitada.`);
    } else {
        // Si no está en el array, agregarla
        cartaExistente = {
            numero: numero,
            carta: cartaCompleta,
            cantidad: 0
        };
        cartas.push(cartaExistente);
    }

    // Buscar la carta en el tablero por su número
    const img = document.querySelector(`img[data-numero="${numero}"]`);
    if (img) {
        img.addEventListener('click', () => actualizarContador(cartaExistente));
        actualizarTabla();  // Actualizar la tabla con la nueva carta habilitada
    } else {
        alert('Carta no encontrada en el tablero');
    }

    // Limpiar los campos del formulario después de guardar
    document.getElementById('numero').value = '';
    document.getElementById('carta').value = '';
});

// Cargar las cartas al inicio
cargarCartas();
>>>>>>> 72ab50922bc4c0d28b0b194564c90300be971cef
