import { CreateCatDto } from './create-dot.dot';
import { Controller, Get, Req, Post, HttpCode, Header, Param, Body, Res, HttpStatus, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';

import { Cat } from './cats.interface';
import { CatsService } from './cats.service';
import { ValidationPipe } from '../pipe/validation.pipe';

import { Roles } from '../guard/roles.decorator';

/**
 * 注意路由注册顺序
 */
@Controller('cats')
export class CatsController {

  // 注入catsService
  constructor(private readonly catsService: CatsService) { }

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'no-store')
  public async findAll(@Req() request: Request): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  @Roles('admin')
  public create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    res.status(HttpStatus.OK).end('This action create a cat');
  }

  @Get(':id')
  public findCat(@Param('id') id: number): string {
    return `This action return a #${id} cat`
  }
}