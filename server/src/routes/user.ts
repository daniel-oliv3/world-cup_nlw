import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';    



/* ======= Rota contagem de usuario ======= */
export async function userRoutes(fastify: FastifyInstance){
  fastify.get('/users/count', async () => {
    const count = await prisma.user.count();

    return { count }
  });
}