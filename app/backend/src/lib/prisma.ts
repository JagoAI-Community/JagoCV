import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    { emit: 'stdout', level: 'error' },
    { emit: 'stdout', level: 'warn' },
  ],
});

// Log setiap query DB ke console (dengan warna)
(prisma as any).$on('query', (e: any) => {
  console.log(`\x1b[36m[DB]\x1b[0m \x1b[2m${e.query}\x1b[0m \x1b[33m${e.duration}ms\x1b[0m`);
});
