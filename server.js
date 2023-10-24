const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./modules');

const app = express();

async function startServer() {
  try {
    const server = new ApolloServer({ schema });
    await server.start();
    server.applyMiddleware({ app });
    app.listen({ port: 3000 }, () =>
      console.log('Server ready at http://localhost:3000')
    );
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

startServer();
