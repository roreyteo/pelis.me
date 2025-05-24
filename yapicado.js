function obtenerPerimetroYValor(canvas, valor) {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
  
    function esBorde(x, y) {
      if (x <= 0 || x >= width - 1 || y <= 0 || y >= height - 1) {
        return true;
      }
  
      const index = (y * width + x) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
  
      const vecinos = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
      ];
  
      for (const [dx, dy] of vecinos) {
        const vecinoIndex = ((y + dy) * width + (x + dx)) * 4;
        const vecinoR = data[vecinoIndex];
        const vecinoG = data[vecinoIndex + 1];
        const vecinoB = data[vecinoIndex + 2];
  
        if (r !== vecinoR || g !== vecinoG || b !== vecinoB) {
          return true;
        }
      }
  
      return false;
    }
  
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (esBorde(x, y)) {
          const index = (y * width + x) * 4;
          data[index] = valor;
          data[index + 1] = valor;
          data[index + 2] = valor;
        }
      }
    }
  
    ctx.putImageData(imageData, 0, 0);
  }
  
  // Ejemplo de uso:
  const canvas = document.getElementById('miCanvas');
  const valorPerimetro = 255; // Valor blanco
  
  obtenerPerimetroYValor(canvas, valorPerimetro);
