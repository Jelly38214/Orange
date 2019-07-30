import { Injectable } from '@nestjs/common';
import { Cat } from './cats.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Cats } from '../model/cats.entity';
import { Repository } from 'typeorm';



/**
 * Provider 只不过是用Injectable注解的类
 * Provider需要在module注册才能被注入到moduel下使用它的地方
 */

@Injectable()
export class CatsService {

  public constructor(
    @InjectRepository(Cats)
    private readonly catsRepository: Repository<Cats>
  ) { }


  private readonly cats: Cat[] = [];

  public create(cat: Cat): void {
    this.cats.push(cat);
  }

  public async findAll(): Promise<Cat[]> {
    return await this.catsRepository.find();
  }

}