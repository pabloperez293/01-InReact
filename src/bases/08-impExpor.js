// import { heroes } from "./data/heroes";
import heroes , {owners} from '../data/heroes/heroes'
//imp+tab 


export const getHeroById = (id) =>{ 
   return heroes.find( (heroes)  => heroes.id === id )
}

// console.log(getHeroById(2));

// find no se usa , solo el filter 

export const getHeroesbyOwner = (owner) => heroes.filter( (heroes) => heroes.owner === owner  )

// console.log(getHeroesbyOwner("Marvel"));


// export default heroes(); 

// estos son ejemplos.