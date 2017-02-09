'use strict';

const graphql = require('graphql');
const chai = require('chai');
const sinon = require('sinon');
chai.use(require('sinon-chai'));

const client = require('./pokemon.client');
const pokemon = require('./pokemon');

const pokemonType = pokemon.type;
const sandbox = sinon.sandbox.create();
const expect = chai.expect;

describe('pokemon', () => {
  it('Should have an id field of type String', () => {
    expect(pokemonType.getFields()).to.have.property('id');
    expect(pokemonType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a name field of type String', () => {
    expect(pokemonType.getFields()).to.have.property('name');
    expect(pokemonType.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a order field of type Integer', () => {
    expect(pokemonType.getFields()).to.have.property('order');
    expect(pokemonType.getFields().order.type).to.deep.equals(graphql.GraphQLInt);
  });

  it('Should have a orderFormatted field of type String', () => {
    expect(pokemonType.getFields()).to.have.property('orderFormatted');
    expect(pokemonType.getFields().orderFormatted.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should resolve orderFormatted field', () => {
    expect(pokemonType.getFields().orderFormatted.resolve({ order : 1 })).to.equal('# 1');
  });

  it('Should return empty string if no order provided', () => {
    expect(pokemonType.getFields().orderFormatted.resolve()).to.equal('');
  });

  it('Should have a img field of type String', () => {
    expect(pokemonType.getFields()).to.have.property('img');
    expect(pokemonType.getFields().img.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should resolve orderFormatted field', () => {
    expect(pokemonType.getFields().img.resolve({ sprites : { front_default : 'default' } })).to.equal('default');
  });

  describe('resolve', () => {
    beforeEach(() => {
      sandbox.stub(client, 'getPokemon');
      sandbox.stub(client, 'getPokemons');
    });
    afterEach(() => sandbox.restore());

    it('Should call getPokemons when no id provided', () => {
      pokemon.resolve();
      expect(client.getPokemon).to.not.have.been.called;
      expect(client.getPokemons).to.have.been.called;
    });

    it('Should call getPokemons when no id provided', () => {
      pokemon.resolve(null, { id : 'id' });
      expect(client.getPokemon).to.have.been.calledWith('id');
      expect(client.getPokemons).to.not.have.been.called;
    });
  });
});
