import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'


const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)


    app.get('/hello', () => {
        const habits = prisma.habit.findMany({
            where: {
                title: {
                    startsWith: 'Exercitar'
                }
            }
            
        })
        
        return habits
    })

    app.listen({
        port: 5113
    }).then( () => {
        console.log('HTTP Server Running')
    }) 
