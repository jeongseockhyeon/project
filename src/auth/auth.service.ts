import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/users.dto';
import { UsersRepository } from 'src/users/users.repository';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}
  async logIn(userDto: UserDto): Promise<{ accessToken: string }> {
    const { userid, password } = userDto;
    const user = await this.usersRepository.findOne({ where: { userid } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { userid };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    } else {
      throw new UnauthorizedException('로그인 실패');
    }
  }
}
