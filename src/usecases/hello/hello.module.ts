import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloController } from 'delivery/hello.controller';

@Module({
	controllers: [HelloController],
	imports: [],
	providers: [HelloService],
})
export class HelloModule {}
