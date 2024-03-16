import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors();

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
		}),
	);

	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: '1', // Current version of the API
	});

	app.enableShutdownHooks();

	await app.listen(process.env['PORT']);
}
bootstrap();
