# Etiquetas de scripting

Nombre y Apellidos: Pablo Rodríguez Crespo
URL del repositorio de gitlab: https://github.com/Pablosax9/ODAW2_RETO.1.7-Modulos.git

## Retos

### Reto1.7

1. Crea una funcion un javascript que cuando la llames muestre tu nombre.  
   Creala dentro de una página html en modalidad script clasico y en linea.  
   Nombre del fichero html debe ser reto1.7.1.html.  

2. Crea una funcion un javascript que cuando la llames muestre tu nombre.
   Creala dentro de una página html en modalidad script clasico y en fichero externo.
   Nombre del fichero html debe ser reto1.7.2.html.

3. Crea una funcion un javascript que cuando la llames muestre tu nombre.  
   Creala dentro de una página html en modalidad tipo modulo y en linea.  
   Nombre del fichero html debe ser reto1.7.3.html.  

4. Crea una funcion un javascript que cuando la llames muestre tu nombre.  
   Creala dentro de una página html en modalidad tipo modulo y en fichero externo.  
   Nombre del fichero html debe ser reto1.7.4.html.

5. Dado el siguiente código javascript.

   ```js

    const boton = document.getElementById("miBoton");
    boton.addEventListener("click", function() {
        alert("¡Botón clickeado!");
    })

   ```

   Crea una página html con los elementos necesarios para que funcione el javascript y que tenga los siguientes requisitos:
   El enlace al script debe de estar en la cabezera.  
   Nombre del fichero html debe ser reto1.7.5.html.

6. Crea una página html que tenga enlazada el javascirpt de index.js y esta a su vez utilize mediante importación una funcion y una constante que hayan sido exportadas desde el fichero libreria.js.
   El enlace al script debe de estar en la cabezera.  
   Nombre del fichero html debe ser reto1.7.6.html.

7. Dado el siguiente sctipt de formato desconocido:

   ```js

    <script id="game-map" type="text/x-game-map">
        #######~~~~###
        #S..##....F##
        ###.~~#..####
        #....~~....##
        #~~~~.~~~####
        #############
        </script>
    <script src="index.js"></script> 

   ```

Explicación:

\# representa obstáculos o áreas inaccesibles (como paredes).
\~ representa agua.  
. representa áreas transitables, como caminos o suelo.  
S representa el punto de inicio del jugador.  
F representa el objetivo o destino.  

   Crea un fichero index.js.
   El enlace al script debe de estar en la cabezera.  
   Añade el contenido en un mapa.
   Mostrar la representación del mapa parseado en la consola.
   **(Opcional)** Recorrer el mapa y procesar los elementos indicando de que tipo son y en que posición están.
   Nombre del fichero html debe ser reto1.7.7.html.
   Ejemplo de salida:

   
Obstacle at (0, 0)
Obstacle at (0, 1)
Obstacle at (0, 2)
Obstacle at (0, 3)
Obstacle at (0, 4)
Obstacle at (0, 5)
Obstacle at (0, 6)
Water at (0, 7)
Water at (0, 8)
Water at (0, 9)
Water at (0, 10) ...
