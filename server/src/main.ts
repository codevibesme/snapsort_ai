import { NestFactory } from '@nestjs/core';

import AppModule from './app.module';

import setupSwagger from 'swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  setupSwagger(app);
  await app.listen(parseInt(process.env.PORT as string), () =>
    console.log(
      `Server started on ${process.env.SERVER_URL} Port: ${process.env.PORT}`,
    ),
  );
}
bootstrap();
