import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

/**
 * Pipe 必须都实现PipeTransform接口
 * 
 */

@Injectable()
export class ValidationPipe implements PipeTransform {
  public transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}