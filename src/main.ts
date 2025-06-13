import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for the frontend's origin and allow credentials
  app.enableCors({
    origin: 'http://brightminds-deployments.s3-website.eu-north-1.amazonaws.com', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow credentials
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
