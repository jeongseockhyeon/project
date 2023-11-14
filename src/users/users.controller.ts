import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/users.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/signup')
  signUp(@Body() userDto: UserDto): Promise<void> {
    return this.usersService.signUp(userDto);
  }
}
