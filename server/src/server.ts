import Fastify from 'fastify'

const app = Fastify()

    app.get('/hello', () => {
        return 'Hello world'
    })
    app.listen({
        port: 5113
    })
