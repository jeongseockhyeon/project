import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './users.entity';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createUser(userDto: UserDto): Promise<void> {
    const { username, useremail, userid, password } = userDto;
    const user = this.create({ username, useremail, userid, password });

    await this.save(user);
  }
}
