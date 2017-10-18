const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');
const moment = require('moment');

const schemaString = require('./schema');
const generateData = require('./data');

const schema = buildSchema(schemaString);
const app = express();

const {
  users,
  commits,
  repositories,
} = generateData();

const root = {
  users({ id }) {
    if (id) return users.find(user => user.id === id);
    return users;
  },
  commits({ id, startDate }) {
    if (startDate) {
      return commits.filter(commit => moment(commit.createdAt, 'YYYY-MM-DD').isAfter(moment(startDate, 'YYYY-MM-DD')));
    }
    if (id) return commits.find(commit => commit.id === id);
    return commits;
  },
  repositories({ id }) {
    if (id) return commits.find(commit => commit.id === id);
    return repositories;
  },
};

app.use('/graph', cors(), graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
