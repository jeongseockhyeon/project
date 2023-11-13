import { IsString, MaxLength, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  username: string;

  @IsString()
  useremail: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  userid: string;

  @IsString()
  @MinLength(8)
  password: string;
}
