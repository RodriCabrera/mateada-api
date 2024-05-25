import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // VALIDATION
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: process.env.NODE_ENV === 'production',
    }),
  );

  // SWAGGER
  const config = new DocumentBuilder()
    .setTitle('Mateada API')
    .setDescription('The Mateada API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  // HELMET
  // app.use(helmet());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
