import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';    



/* ======= Rotas ======= */
export function PoolRoutes(fastify: FastifyInstance){
  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count();

    return { count };
  });
}