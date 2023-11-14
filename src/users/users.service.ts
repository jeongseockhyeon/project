import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { UserDto } from './dto/users.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async signUp(userDto: UserDto): Promise<void> {
    return this.usersRepository.createUser(userDto);
  }
  async signIn(userDto: UserDto): Promise<string> {
    const { userid, password } = userDto;
    const user = await this.usersRepository.findOne({ where: { userid } });

    if (user && (await bcrypt.compare(password, user.password))) {
      return '로그인 성공';
    } else {
      throw new UnauthorizedException('로그인 실팬');
    }
  }
}
