const { gql } = require('apollo-server-express');
const createTask = require('./mutations/create-task');
const updateTask = require('./mutations/update-task');
const removeTask = require('./mutations/delete-task');
const task = require('./queries/task');
const tasks = require('./queries/tasks');
const pendingTasks = require('./queries/pending-tasks');
const completedTasks = require('./queries/completed-tasks');

const typeDefs = gql`
  type Task {
    id: ID!
    title: String
    description: String
    user: User
  }

  input CreateTaskInput {
    title: String!
    description: String
    isCompleted: Boolean
  }

  input UpdateTaskInput {
    title: String
    description: String
    isCompleted: Boolean
  }

  extend type Query {
    task(id: ID): Task!
    tasks: [Task!]
    pendingTasks: [Task!]  
    completedTasks: [Task!]  
  }

  extend type Mutation {
    createTask(input: CreateTaskInput!): Task
    updateTask(id: ID!, input: UpdateTaskInput!): Task
    removeTask(id: ID!): Task
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  // Resolvers for Queries
  Query: {
    task,
    tasks,
    pendingTasks,
    completedTasks
  },

  // Resolvers for Mutations
  Mutation: {
    createTask,
    updateTask,
    removeTask,
  },
};

module.exports = { typeDefs, resolvers };
