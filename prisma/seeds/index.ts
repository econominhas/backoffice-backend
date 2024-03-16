import { PrismaClient } from '@prisma/client';

const bootstrap = async () => {
	const prisma = new PrismaClient();

	try {
		await prisma.$disconnect();
		process.exit(0);
	} catch (err) {
		console.error(err);
		await prisma.$disconnect();
		process.exit(1);
	}
};

bootstrap();
