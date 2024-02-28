import { Module } from '@nestjs/common';
import { PostgresModule } from './repositories/postgres';
import { ConfigModule } from '@nestjs/config';
import { validateConfig } from './config';
import { ScheduleModule } from '@nestjs/schedule';
import { HelloModule } from './usecases/hello/hello.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: validateConfig,
			isGlobal: true,
		}),
		ScheduleModule.forRoot(),
		PostgresModule.forRoot(),
		HelloModule,
	],
})
export class AppModule {}
