const { gql } = require('apollo-server-express');
const users = require('./users');
const tasks = require('./tasks');
const { GraphQLScalarType } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = gql`
  scalar Time

  type Query {
    getVersion: String!
  }

  type Mutation {
    version: String!
  }
`;

const timeScalar = new GraphQLScalarType({
  name: 'Time',
  description: 'Time custom scalar type',
  serialize: (value) => value,
});

const resolvers = {
  Time: timeScalar,
  Query: {
    getVersion: () => `v1`,
  },
};

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, users.typeDefs, tasks.typeDefs],
  resolvers: [resolvers, users.resolvers, tasks.resolvers],
});

module.exports = schema;
