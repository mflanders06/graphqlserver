const { ApolloServer } = require('apollo-server-express');

const {typeDefs} = require('./Schema/TypeDefs')
const {resolvers} = require('./Schema/Resolvers')

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const PORT = 3000

const app = express()
const prisma = new PrismaClient();


const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrPrevention: true,
    cors: {
        origin: ["http://127.0.0.1:4200", "http://127.0.0.1:3000", "http://localhost:3000", "http://localhost:4200"]
    }
})

server.applyMiddleware({ app })

app.listen(PORT, () => console.log('Server Running on port ', PORT))