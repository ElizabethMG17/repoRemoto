const pelis = require("./pelis");

// Analizar argumentos
function main() {
  const args = process.argv.slice(2);
  const comando = args[0];
  const valor = args[1];

  // Mapa de funciones según comando
  const comandos = {
    "--sort": () => console.table(pelis.sort(valor)),
    "--search": () => console.table(pelis.search(valor)),
    "--tag": () => console.table(pelis.tag(valor)),
  };

  try {
    if (!comando) {
      pelis.sinArg();
    } else if (comandos[comando]) {
      if (!valor) {
        console.error(`Se requiere un valor para el comando ${comando}`);
        process.exit(1);
      }
      comandos[comando]();
    } else {
      console.error("Comando no reconocido:", comando);
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();

//primer push
// primer pull
