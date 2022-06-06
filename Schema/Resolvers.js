const { PrismaClient } = require('@prisma/client')
const { users } = require('../FakeData')
const { dateScalar } = require('../scalarTypes/date')

const prisma = new PrismaClient();

const resolvers = {

    Date: dateScalar,

    Query: {

        async users(){
            return await prisma.prismaUser.findMany();
        },

        async todos(){
            return await prisma.toDo.findMany({include: {
                prismauser: true
            }});
        }
    },

    Mutation: {
        createUser(parent, args) {
            const newUser = args;
            users.push(newUser);
            return newUser;
        }
    }

}

module.exports = {resolvers}