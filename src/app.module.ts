import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { UsersRepository } from './users/users.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmModule.forFeature([UsersRepository]),
    UsersModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class AppModule {}
