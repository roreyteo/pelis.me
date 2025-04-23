const fs = require('node:fs');
const path = require('node:path');

function leerPeliculas() {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'pelis.json'), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al leer el archivo pelis.json:', error);
    return [];
  }
}

function listarPeliculas() {
  return leerPeliculas();
}

function ordenarPeliculas(propiedad) {
  const peliculas = leerPeliculas();
  return peliculas.sort((a, b) => {
    const valorA = typeof a[propiedad] === 'string' ? a[propiedad].toLowerCase() : a[propiedad];
    const valorB = typeof b[propiedad] === 'string' ? b[propiedad].toLowerCase() : b[propiedad];

    if (valorA < valorB) {
      return -1;
    }
    if (valorA > valorB) {
      return 1;
    }
    return 0;
  });
}

function buscarPeliculas(texto) {
  const peliculas = leerPeliculas();
  const textoLower = texto.toLowerCase();
  return peliculas.filter(pelicula =>
    pelicula.title.toLowerCase().includes(textoLower)
  );
}

function filtrarPorTag(tag) {
  const peliculas = leerPeliculas();
  const tagLower = tag.toLowerCase();
  return peliculas.filter(pelicula =>
    pelicula.tags.map(t => t.toLowerCase()).includes(tagLower)
  );
}

module.exports = {
  listarPeliculas,
  ordenarPeliculas,
  buscarPeliculas,
  filtrarPorTag,
};
