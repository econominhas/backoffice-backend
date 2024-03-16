import { Injectable } from '@nestjs/common';
import { HelloUseCase } from 'models/hello';

@Injectable()
export class HelloService extends HelloUseCase {
	hello(): string {
		return 'Hello World!';
	}
}
