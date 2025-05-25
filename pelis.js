// pelis.js
// Dependencias de lectura de archivos
const fs   = require('fs');
const path = require('path');

// 1) Leemos el JSON
const archivo = fs.readFileSync(path.join(__dirname, 'pelis.json'), 'utf-8');
const peliculas = JSON.parse(archivo);

// 2) Funciones requeridas
function listarPeliculas() {
  return peliculas;
}

function ordenarPeliculas(propiedad) {
  // copia y ordena según propiedad (title, rating, etc.)
  return [...peliculas].sort((a, b) => {
    if (a[propiedad] < b[propiedad]) return -1;
    if (a[propiedad] > b[propiedad]) return 1;
    return 0;
  });
}

function buscarPeliculas(texto) {
  return peliculas.filter(p =>
    p.title.toLowerCase().includes(texto.toLowerCase())
  );
}

function filtrarPorTag(tag) {
  return peliculas.filter(p =>
    p.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

// 3) Exportamos todo
module.exports = {
  listarPeliculas,
  ordenarPeliculas,
  buscarPeliculas,
  filtrarPorTag
};


