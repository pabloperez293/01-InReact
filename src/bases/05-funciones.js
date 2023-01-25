// Funciones en JS
const saludar = function (nombre){
    return `Hola, ${ nombre}`;
  }
  const saludar2 =  (nombre) =>{
    return `Hola, ${ nombre}`;
  }
  const saludar3 = (nombre) => `Hola, ${ nombre}`;
  
  console.log( saludar("peter"));
  console.log( saludar2("PARKER"));
  console.log( saludar3("sPIDER"));
  
  const getUser = () =>
     ({
      uid: "abcd",
      username: "The Father"
    })
  
  const user = getUser();
  console.log(getUser);
  
  
  // function getUsuarioActivo ( nombre ) {
  //   return{
  //     uid: "abcd567",
  //     username: "pablor"
  //   }
  // };
  // const usuarioActivo = getUsuarioActivo ("pabblo");
  // console.log( usuarioActivo);
  
  // Tarea
  // 1 tranformen a una funcion de flecha 
  // 2 tienen que retornar un objeto implicito
  // 3 pruebas. 
  
  const getUsuarioActivo = () => (
    {
      uid: "qweer567",
      username: "Perez"
    }
  )
  
  const usuarioActivo = getUsuarioActivo ("pabblo");
  console.log( usuarioActivo);
  