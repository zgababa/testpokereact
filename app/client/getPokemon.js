'use strict';

import request from 'superagent';

const path = '/graphql';
const queryParam = '?graphqlQuery=';

function getQuery(idPokemon) {
  return `
    {
      pokemon(id: ${idPokemon}) {
        name
        orderFormatted
        img
      }
    }
  `;
}

function getPokemon(idPokemon) {
  const uri = path + queryParam + getQuery(idPokemon);
  return request.get(uri);
}

export default getPokemon;
