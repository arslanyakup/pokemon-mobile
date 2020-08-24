import { get } from '../service/serviceutils.js';


export const pokeList = async () => {
  return await get('pokemon?offset=0&limit=2000');
}
