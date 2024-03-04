import { IsNotEmpty, IsString } from 'class-validator';
import { ROLE } from '../../user/user.interface';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
  role: ROLE;

  @IsString()
  @IsNotEmpty()
  email: string;
  password: string;
}
