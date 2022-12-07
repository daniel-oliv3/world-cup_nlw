import Fastify from 'fastify';
import cors from '@fastify/cors';
import { z } from 'zod';
import ShortUniqueId from 'short-unique-id';
import { PoolRoutes } from './routes/pool';



async function bootstrap(){
    const fastify = Fastify({
        logger: true,
    });

    await fastify.register(cors, {
        origin: true,
    });
    

    fastify.register(PoolRoutes);


    /* ======= Rota contagem de usuario ======= */
    fastify.get('/users/count', async () => {
        const count = await prisma.user.count();

        return { count }
    });

    /* ======= Rota contagem de palpites ======= */
    fastify.get('/guesses/count', async () => {
        const count = await prisma.guess.count();

        return { count }
    });

    /* ======= Bolões ======= */
    fastify.post('/pools', async (request, reply) => {
        const createPoolBody = z.object({
            title: z.string(),
        });

        const { title } = createPoolBody.parse(request.body);

        const generate = new ShortUniqueId({ length: 6 });
        const code = String(generate()).toUpperCase();

        await prisma.pool.create({
            data: {
                title,
                code
            }
        });

        return reply.status(201).send({ code });
    });

    await fastify.listen({ port: 3333, /*host: '0.0.0.0'*/ });
}

bootstrap(); 




/* BACK-END */














