import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new rateLimit({ windowMs: 5 * 60 * 1000, max: 100 }));
  app.use(compression());
  app.use(cookieParser('mini-orange'));
  app.use(csurf({ cookie: true })); // 防止csrf

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, () => {
    console.log('app is listening at 3000 port');
  });
}
bootstrap();
