import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

/** 
 * 中间件必须要实现NestMiddleware接口
 * 中间件不能在@Module中列出
 * 包含中间件的模块必须实现NestModule接口，必须使用module的configure()方法来设置它们
 * 
 */

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: Function) {
    console.log('Request');
    next();
  }
}



