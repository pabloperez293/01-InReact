import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { heroes } from "./data/heroes";
import { heroes}  from './data/heroes/heroes'
//imp+tab 

// ejercicio 

// const getHerobyId = (id) =>{

//   return heroes.find( (heroes)  => {
//     if( heroes.id === id) {
//       return true;
//     }else {
//       return true
//     }
//     });
// }

// console.log(getHerobyId(2));

const getHerobyId = (id) =>{ 
   return heroes.find( (heroes)  => heroes.id === id )
}

console.log(getHerobyId(2));

// find no se usa , solo el filter 

const getHeroesbyOwner = (owner) => heroes.filter( (heroes) => heroes.owner === owner  )

console.log(getHeroesbyOwner("Marvel"));




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
