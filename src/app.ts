import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
export const app = Fastify({
  logger: true,
})

app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ hello: 'world' })
})
