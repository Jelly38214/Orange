import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * Guard 就是被Injectable注解，实现了CanActivate接口的类
 * 它能获取到ExecutionContext, 当返回false, 则忽略用户的请求
 */
@Injectable()
export class AuthGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // return validateRequest(request);
    return true;
  }
}