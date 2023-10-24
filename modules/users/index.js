const { gql } = require('apollo-server-express');
const userMutationFunctions = require('./mutations/user-mutations');
const userQueriesFunctions = require('./queries/user-queries');

const createUser = userMutationFunctions.createUser;
const removeUser = userMutationFunctions.deleteUser;
const updateUser = userMutationFunctions.updateUser;
const user = userQueriesFunctions.getUserById;
const users = userQueriesFunctions.getAllUsers;

const typeDefs = gql`
  type User {
    id: ID! # The "!" means required
    firstname: String
    lastname: String
    email: String
    username: String
  }

  input CreateUserInput {
    firstname: String!
    lastname: String
    email: String!
    username: String!
  }

  input UpdateUserInput {
    firstname: String
    lastname: String
  }

  extend type Query {
    user(id: ID): User!
    users: [User!]
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    removeUser(id: ID!): User
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  // Resolvers for Queries
  Query: {
    user,
    users,
  },

  // Resolvers for Mutations
  Mutation: {
    createUser,
    updateUser,
    removeUser,
  },
};

module.exports = { typeDefs, resolvers };
