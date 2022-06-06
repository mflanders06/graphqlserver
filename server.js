const { ApolloServer } = require('apollo-server-express');

const {typeDefs} = require('./Schema/TypeDefs')
const {resolvers} = require('./Schema/Resolvers')

const express = require('express');
const { PrismaClient } = require('@prisma/client');


const PORT = 4000

const app = express()
const prisma = new PrismaClient();


const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen(PORT, () => console.log('Server Running on port ', PORT))