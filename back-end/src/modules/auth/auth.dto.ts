import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsStrongPassword,
} from 'class-validator';

export class SignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}

export class TokenPayloadDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  id: number;

  @IsNotEmpty()
  iat: number;

  @IsNotEmpty()
  exp: number;
}
