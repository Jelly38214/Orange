import { CreateCatDto } from './create-dot.dot';
import { Controller, Get, Req, Post, HttpCode, Header, Param, Body, Res, HttpStatus, UsePipes, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';

import { ICat } from './cats.interface';
import { CatsService } from './cats.service';
import { ValidationPipe } from '../pipe/validation.pipe';

import { Roles } from '../guard/roles.decorator';
import { LoggingInterceptor } from '../interceptor/logging.interceptor';

/**
 * 注意路由注册顺序
 */
@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {

  // 注入catsService
  constructor(private readonly catsService: CatsService) { }

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'no-store')
  public async findAll(@Req() request: Request): Promise<ICat[]> {
    return this.catsService.findAll();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  public async create(@Body() cat: ICat, @Res() res: Response) {
    console.log(cat);
    await this.catsService.create(cat);
    res.status(HttpStatus.OK).json(cat);
  }

  @Get(':id')
  public findCat(@Param('id') id: number): string {
    return `This action return a #${id} cat`
  }

  @Post('load')
  @UseInterceptors(FileInterceptor('file'))
  public uploadFile(@UploadedFile() file: any) {
    console.log(file);
  }

}