'use strict';

const request = require('request-promise');
const integrationServer = require("../../utils/integrationServer");
const chai = require('chai');

const expect = chai.expect;

describe('Integration', () => {
  let app;

  before((done) => {
    app = integrationServer.start(done);
  });

  after((done) => {
    integrationServer.stop(app, done);
  });

  it('Should resolve bulbasaur', () => {
    const query = `{
      pokemon(id:1) {
        id
        name
        order
        img
      }
    }`;
    const expected = {
      "pokemon": {
        "id": "1",
        "name": "bulbasaur",
        "order": 1,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      }
    };

    return integrationServer
      .graphqlQuery(app, query)
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.deep.equals(expected);
      });
  });

  it('Should resolve 20 pokemons', () => {
    const query = `{
      pokemons {
        id
        name
        order
        img
      }
    }`;

    const firstPokemon = {
      "id": "1",
      "name": "bulbasaur",
      "order": 1,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    };

    return integrationServer
      .graphqlQuery(app, query)
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body.pokemons[0]).to.deep.equal(firstPokemon);
        expect(response.body.pokemons.length).to.equal(20);
      });
  });
});
