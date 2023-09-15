import { IsEmail, IsNotEmpty } from 'class-validator';
import { Request as ExpressRequest } from 'express';

export interface AuthenticatedRequest extends ExpressRequest {
  user: {
    name: string;
    email: string;
    id: number;
  };
}

export class SignInDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class AuthenticatedSignInDto extends SignInDto {
  id: number;
}
