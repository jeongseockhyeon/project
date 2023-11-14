import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { UsersRepository } from './users/users.repository';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UsersModule],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
