'use strict';

const express = require('express');
const graphql = require('graphql').graphql;
const graphqlHTTP = require('express-graphql');

const rootSchema = require('./schema/rootSchema');

const app = express();
const PORT = 3001;

app.use('/graphiql', graphqlHTTP({
  schema : rootSchema,
  pretty : true,
  graphiql : true
}));


app.get('/graphql', (req, res) => {
  const graphqlQuery = req.query.graphqlQuery;
  if (!graphqlQuery) {
    return res.status(500).send('You must provide a query');
  }

  return graphql(rootSchema, graphqlQuery)
    .then(response => response.data)
    .then((data) => res.json(data))
    .catch((err) => console.error(err));
});

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
