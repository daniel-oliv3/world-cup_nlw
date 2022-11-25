import Fastify from 'fastify';
import cors from '@fastify/cors';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query'],
})

async function bootstrap(){
    const fastify = Fastify({
        logger: true,
    });

    await fastify.register(cors, {
        origin: true,
    });

    fastify.get('/pools/count', async () => {
        const count = await prisma.pool.count();

        return { count }
    })

    fastify.post('/pools', async (request, reply) => {
        const createPoolBody = z.object({
            title: z.string(),
        });

        const { title } = createPoolBody.parse(request.body);

        return reply.status(201).send({ title });
        //return { title }
    });

    await fastify.listen({ port: 3333, /*host: '0.0.0.0'*/ });
}

bootstrap(); 


/* BACK-END */














