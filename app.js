let peliculas = require('./peliculas');

for (let i = 0; i < peliculas.length; i++) {
    let pelicula = peliculas[i];

    console.log(`------------------------`);
    console.log(`Título de la película: ${pelicula.title}`);
    console.log(`Identificador único: ${pelicula.id}`);
    console.log(`Calificación del 1 al 5: ${pelicula.rating}`);
    console.log(`¿La película tiene premios?: ${pelicula.awards}`);
    console.log(`Duración: ${pelicula.length} minutos`);
    console.log(`Precio: $${pelicula.price}`);
    console.log(`Género: ${pelicula.genre}`);
}

let rutaArchivo = "./mensaje.txt";

const fs = require('fs');
const file = fs.readFileSync(rutaArchivo, "utf-8");
console.log(file);


