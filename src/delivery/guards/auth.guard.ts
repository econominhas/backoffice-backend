import { Injectable, SetMetadata } from '@nestjs/common';

@Injectable()
export class AuthGuard {}
/**
 * Decorator to allow user to use the route
 * even if he isn't logged in
 */
export const Public = () => SetMetadata('isPublic', true);
