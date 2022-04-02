import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://localhost:3000','https://localhost:8080', 'https://localhost:4200']
  });
  await app.listen(8000);

}
bootstrap();
