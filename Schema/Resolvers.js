const { PrismaClient } = require('@prisma/client')
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

        async createTodo(parent, args){
            return await prisma.toDo.create({ 
                data: {
                    dateCreated: new Date(),
                    taskName: args.taskName,
                    userId: args.userId,
                    dueDate: args.dueDate
                }    
            })
        },

        async editTodo(parent, args){
            return await prisma.toDo.update({
                where:{id: args.id},
                data: {
                    dueDate: args.dueDate,
                    taskName: args.taskName
                }
            })
        },

        async completeTodo(parent, args) {
            return await prisma.toDo.update({
                where:{id: args.id},
                data: {
                    dateCompleted: new Date(),
                    completed: true
                }
            })
        },

        async deleteTodo(parent, args) {
            return await prisma.toDo.delete({
                where: {id: args.id}
            })
        }
    }

}

module.exports = {resolvers}