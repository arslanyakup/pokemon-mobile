import axios from 'axios';

const get = (endpoint) =>
  new Promise((resolve, reject) => {
    axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
      headers: { 'Content-Type': 'application/json' },
    }).get(endpoint)
      .then((response) => {
        return resolve(response);
      }).catch((err) => {
        reject(err);
      });
  });

export { get }