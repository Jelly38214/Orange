import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';


/**
 * Guard的范围： 控制器, 方法, 全局
 */
@Injectable()
export class RolesGuard implements CanActivate {
  public constructor(private readonly reflector: Reflector) { }

  public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles: string[] = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => user.roles.some((role: string) => roles.includes(role));
    return user && user.roles && hasRole();
  }
}