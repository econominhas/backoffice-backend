import { Controller, Get, Inject } from '@nestjs/common';

import { HelloService } from 'usecases/hello/hello.service';
import { HelloUseCase } from 'models/hello';
import { Public } from './guards/auth.guard';

@Controller('hello')
export class HelloController {
	constructor(
		@Inject(HelloService)
		private readonly helloService: HelloUseCase,
	) {}

	@Get('/teste')
	@Public()
	HelloProvider() {
		return this.helloService.hello();
	}
}
