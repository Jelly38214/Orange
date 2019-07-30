import { Injectable } from '@nestjs/common';
import { Cat } from './cats.interface';

/**
 * Provider 只不过是用Injectable注解的类
 * Provider需要在module注册才能被注入到moduel下使用它的地方
 */

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  public create(cat: Cat): void {
    this.cats.push(cat);
  }

  public findAll(): Cat[] {
    return [...this.cats];
  }

}