'use strict';

const graphql = require('graphql');
const pokemonType = require('./pokemon/pokemon');

const schema = new graphql.GraphQLSchema({
  query : new graphql.GraphQLObjectType({
    name : 'Query',
    fields : {
      pokemon : pokemonType,
      pokemons : {
        type : new graphql.GraphQLList(pokemonType.type),
        resolve : pokemonType.resolve
      }
    }
  })
});

module.exports = schema;
