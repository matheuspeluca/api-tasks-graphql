# GraphQL API Server

This API is part of the assessment process for the APIs and Web Services course in the Postgraduate Program in Distributed Software Architecture at PUC Minas. This project is a GraphQL-based API server that manages tasks and users. It provides functionality for creating, updating, deleting, and fetching tasks and users.

## Tasks
### Mutations
- **Create Task:**

```graphql
mutation {
  createTask(input: {
    title: "Sample Task",
    description: "This is a sample task description",
    isCompleted: false
  }) {
    id
    title
    description
    isCompleted
  }
}
```
- **Update Task:**
```graphql

mutation {
  updateTask(id: 1, input: {
    title: "Updated Task Title",
    description: "Updated task description",
    isCompleted: true
  }) {
    id
    title
    description
    isCompleted
  }
}
```
- **Delete Task:**
```graphql

mutation {
  removeTask(id: 1) {
    id
    title
    description
    isCompleted
  }
}
```
### Queries
- **Get Task By ID:**
```graphql
query {
  task(id: 1) {
    id
    title
    description
    isCompleted
  }
}
```
- **Get All Tasks:**
```graphql

query {
  tasks {
    id
    title
    description
    isCompleted
  }
}
```
- **Get Pending Tasks:**
```graphql

query {
  pendingTasks {
    id
    title
    description
    isCompleted
  }
}
```
- **Get Completed Tasks:**
```graphql

query {
  completedTasks {
    id
    title
    description
    isCompleted
  }
}

```
## Users
### Mutations
- **Create User:**
```graphql
mutation {
  createUser(input: {
    firstname: "John",
    lastname: "Doe",
    email: "john@example.com",
    username: "johndoe"
  }) {
    id
    firstname
    lastname
    email
    username
  }
}
```
- **Update User:**
```graphql
mutation {
  updateUser(id: 1, input: {
    firstname: "UpdatedFirstName",
    lastname: "UpdatedLastName"
  }) {
    id
    firstname
    lastname
    email
    username
  }
}
```
- **Delete User:**
```graphql
mutation {
  removeUser(id: 1) {
    id
    firstname
    lastname
    email
    username
  }
}
```
### Queries
- **Get User By ID:**
```graphql
query {
  user(id: 1) {
    id
    firstname
    lastname
    email
    username
  }
}
```
- **Get All Users::**
```graphql
query {
  users {
    id
    firstname
    lastname
    email
    username
  }
}

```
**Running the Server**

To run the server, ensure you have Node.js installed. Then, follow these steps:

- Install dependencies by running npm install in the project directory.
- Run the server using the command node server.js.
- The server will be accessible at http://localhost:3000/graphql.
