import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(LoggerMiddleware); // 全局中间件
  await app.listen(3000, () => {
    console.log('app is listening at 3000 port');
  });
}
bootstrap();
