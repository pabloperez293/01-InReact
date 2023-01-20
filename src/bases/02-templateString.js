const name = "peter";
const surname = "parker";

// const nameComplete =  name + " " + surname;
const nameComplete = `${ name } ${ surname } `;

console.log(nameComplete);

function getSaludo(name) {
  return "hi neighbour" + name;
}

console.log( ` Este es un texto: ${getSaludo() }`);