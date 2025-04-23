const pelis = require('./pelis');
const { program } = require('commander');

program
  .option('--sort <propiedad>', 'Ordenar las películas por la propiedad especificada')
  .option('--search <texto>', 'Buscar películas por texto en el título')
  .option('--tag <nombreDelTag>', 'Filtrar películas por el tag especificado');

program.parse(process.argv);

const options = program.opts();

if (Object.keys(options).length === 0) {
  // Sin parámetros, listar todas las películas
  const todasLasPeliculas = pelis.listarPeliculas();
  console.table(todasLasPeliculas);
} else if (options.sort) {
  // Ordenar películas
  const peliculasOrdenadas = pelis.ordenarPeliculas(options.sort);
  console.table(peliculasOrdenadas);
} else if (options.search) {
  // Buscar películas
  const peliculasEncontradas = pelis.buscarPeliculas(options.search);
  console.table(peliculasEncontradas);
} else if (options.tag) {
  // Filtrar por tag
  const peliculasPorTag = pelis.filtrarPorTag(options.tag);
  console.table(peliculasPorTag);
}

