
import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher)=>{
    const validPublishers = ['Marvel Comics','DC Comics',];

    console.log(validPublishers.includes(publisher))

    // if ( !validPublishers.prototype.includes(publisher)){

    //     throw new Error (`Publiser "${publisher}" no es correcto`);

    // }
    return heroes.filter(hero=> hero.publisher===publisher)
}