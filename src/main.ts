import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  const serverConfig = config.get('server');
  app.use(cookieParser());
  await app.listen(serverConfig.port);
}
bootstrap();
