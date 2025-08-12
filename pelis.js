const fs = require("fs");
const data = fs.readFileSync(__dirname + "/pelis.json"); // Leer el archivo JSON una vez
const peliculas = JSON.parse(data); // Parsear el JSON

// Función para devolver todas las películas
exports.sinArg = function () {
  return console.table(peliculas); // Mostrar las películas en formato tabla
};

// Función para ordenar las películas
exports.sort = function (propiedad) {
  if (!peliculas.every((pelicula) => propiedad in pelicula)) {
    throw new Error("Propiedad no válida");
  }

  return peliculas.sort((a, b) => {
    if (a[propiedad] < b[propiedad]) {
      return -1; // a va antes que b
    }
    if (a[propiedad] > b[propiedad]) {
      return 1; // b va antes que a
    }
    return 0; // son iguales
  });
};

// Función para buscar películas por título
exports.search = function (criterio) {
  return peliculas.filter((pelicula) =>
    pelicula.title.toLowerCase().includes(criterio.toLowerCase())
  );
};

exports.tag = function (nombreDelTag) {
  return peliculas.filter(
    (pelicula) => pelicula.tags.includes(nombreDelTag.toLowerCase()) // Verificamos si el tag está en el array
  );
};
