import  {getHeroById}  from "./bases/08-impExpor";
import heroes from './data/heroes/heroes';

const promesa = new Promise( (res, rej) => {
  setTimeout( () => {
    // Tarea imrportar el hero
    const heroes =  getHeroById(3)
    res(heroes) 
    // con esto muestra los herores old
    // rej(" Heroe eliminado")
  },2000)
})

promesa.then( (heroes) =>{
  console.log("Super Hero", heroes)
})
.catch( err => console.warn(err))

// const promesa = new Promise( (res, rej) => {
//   setTimeout( () => {
//     res();
//     // console.log("2 seconds despues :D")
//   },2000)
// })

// promesa.then( () =>{
//   console.log("then de la promesa")
// })

//----Promesas asyncronicas ---------------- 
// const getByIdAsync = (id ) =>{
// return new Promise( (res, rej) => {

//     setTimeout( () => {
//       // Tarea imrportar el hero
//       const heroes =  getHeroById(id)
//       if(heroes){
//         res(heroes) 
//       }else{
//         rej(" Heroe eliminado")
//       }
//     },2000)
//   })
    
// }
 
// getByIdAsync(22)
  
//   .then( console.log( "yo quiero un heroe") ) 
//   .catch(err => console.warn( "alert", err) ) ;
