
// operacion condicional ternario 
const activo = true;

// let mensaje= "";

// if( !activo ){
//   mensaje = "activo";
// }else{
//   mensaje = "inactivo";
// }

// const mensaje = ( activo === true ) ? `Activo` : `inactivo`;
// const mensaje = ( !activo === true ) ? `Activo` : null;

const mensaje = !activo && "activo";

console.log(mensaje)
