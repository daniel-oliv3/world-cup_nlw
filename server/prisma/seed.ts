import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      avatarUrl: 'https://github.com/daniel-oliv3.png',
    }
  })
}

/* Bolao */


 




main();