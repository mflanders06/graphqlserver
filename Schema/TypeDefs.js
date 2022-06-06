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
        users: [User!]!
        todos: [Todo]
    }




    # Mutations
    type Mutation {
        createUser(name: String!, age: Int!, married: Boolean!): User!
    }



`;

module.exports = {typeDefs}