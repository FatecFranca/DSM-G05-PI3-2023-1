import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthLoginDTO {
  @IsEmail()
  email: string;
  
  @IsString()
  @MinLength(6)
  @MaxLength(12)
  senha: string;
}