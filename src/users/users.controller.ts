import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserDto } from './dto/users.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/signup')
  signUp(@Body(ValidationPipe) userDto: UserDto): Promise<void> {
    return this.usersService.signUp(userDto);
  }
  @Post('/signin')
  signIn(@Body() userDto: UserDto) {
    return this.usersService.signIn(userDto);
  }
}
