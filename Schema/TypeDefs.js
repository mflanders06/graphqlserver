const { gql } = require('apollo-server-express');


const typeDefs = gql`

    scalar Date

    type User {
        id: Int!
        username: String!
        password: String!
    }

    type Todo {
        id: Int!
        userId: Int!
        dateCreated: Date
        dueDate: Date
        completed: Boolean
        dateCompleted: Date
        taskName: String!
        prismauser: User
    }

    # Queries
    type Query {
        users: [User]
        todos: [Todo]
    }




    # Mutations
    type Mutation {
        createUser(username: String!, password: String): User
        createTodo(taskName: String! userId: Int!): Todo
        editTodo(id: Int!, dueDate: Date, taskName: String!): Todo
        completeTodo(id: Int!): Todo
        deleteTodo(id: Int!): Todo
    }



`;

module.exports = {typeDefs}