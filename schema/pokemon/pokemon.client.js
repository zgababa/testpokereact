'use strict';

const request = require('request-promise');
const path = require('path');
const Promise = require('bluebird');

const BASE_PATH = 'http://pokeapi.co/api/v2/';

function getPokemon(id) {
  return request({
    uri : BASE_PATH + path.join('pokemon-form', id.toString()),
    json : true
  });
}

function getPokemons() {
  return request({
    uri : BASE_PATH + path.join('pokemon-form'),
    json : true
  }).then((pokemons) => {
    const pokemonUrls = pokemons.results.map((pokemon) => request(pokemon.url));
    return Promise.all(pokemonUrls);
  }).then((pokemons) => pokemons.map((pokemon) => JSON.parse(pokemon)));
}

module.exports = {
  getPokemon,
  getPokemons
};
