import { IsEmail, IsNotEmpty } from 'class-validator';

export default class CreateUserDto {
  @IsEmail()
  public eamil: string;

  @IsNotEmpty()
  public password: string;
}
