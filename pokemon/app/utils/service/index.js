import { get } from '../service/serviceutils.js';
import _ from 'lodash';

export const pokeList = async () => {
  return await get('pokemon?offset=0&limit=2000');
}

export const pokeDetail = async (pokeIndex) => {
  const response1 = await get('pokemon-species/'.concat(pokeIndex));
  const response2 = await get('pokemon/'.concat(pokeIndex));
  return _.merge(response1, response2);
}
