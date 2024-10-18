//Obtener el contenido del script con el ID "game-map"
document.addEventListener("DOMContentLoaded", function() {
    const gameMapScript = document.getElementById('game-map');
    const gameMap = gameMapScript.innerHTML.trim().split('\n').map(line => line.trim()); // Aseguramos que cada línea se limpie de espacios

    //Mostramos la representación del mapa en la consola
    console.log("Mapa del juego:");
    console.log(gameMap);

    //Contenedor para mostrar el mapa en el HTML
    const mapContainer = document.getElementById('mapRepresentation');
    let mapDisplay = ""; //Variable para construir el contenido del mapa

    //Recorremos los elementos del mapa
    for (let i = 0; i < gameMap.length; i++) {
        for (let j = 0; j < gameMap[i].length; j++) {
            const char = gameMap[i][j];
            let tipo = '';

            //Determinamos los tipos de elementos del mapa
            switch (char) {
                case '#':
                    tipo = 'Obstacle';
                    break;
                case '~':
                    tipo = 'Water';
                    break;
                case '.':
                    tipo = 'Passable';
                    break;
                case 'S':
                    tipo = 'Start';
                    break;
                case 'F':
                    tipo = 'Finish';
                    break;
                default:
                    tipo = 'Unknown'; //Caractéres no reconocidos
            }

            //Mostrar el tipo de elemento y su posición
            console.log(`${tipo} at (${i}, ${j})`);

            //Agregar el carácter al mapa visual, usando diferentes estilos
            mapDisplay += char; //Agregamos el carácter al display del mapa
        }
        mapDisplay += '\n'; //Salto de línea
    }

    //Insertar la representación del mapa en el contenedor
    mapContainer.textContent = mapDisplay;
});