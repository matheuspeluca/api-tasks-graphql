const { gql } = require('apollo-server-express');
const taskMutationFunctions = require('./mutations/task-mutations');
const taskQueryFunctions = require('./queries/task-queries');

const createTask = taskMutationFunctions.createTask
const updateTask = taskMutationFunctions.uptadeTask
const removeTask = taskMutationFunctions.deleteTask
const task = taskQueryFunctions.getTaskById
const tasks = taskQueryFunctions.getAllTasks
const pendingTasks = taskQueryFunctions.getPendingTasks
const completedTasks = taskQueryFunctions.getCompletedTasks

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
