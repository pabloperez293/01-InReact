// Desestructuracion , Asignacion Desestructurante 
const persona = {
    nombre : "Peter",
    edad: 29,
    clave: "spider-man"
  };
  // Este es tu objeto literal
  
  const { nombre, clave, edad } = persona;
  // Se puede extraer , no importa el orden. 
  // console.log( nombre);
  // console.log( edad);
  // console.log( clave);
  
  const retornaPersona = ( {clave, nombre, edad ,rango ="capitan"}) => {
    // console.log(nombre,edad , rango )
    return{
      nombreClave: clave,
      anios:edad
    }
  }
  
  const vengadores = retornaPersona(persona)
  
  console.log(vengadores)
  