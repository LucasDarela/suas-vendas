import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(@Inject(JwtService) private jwtService: JwtService) {} // 🔹 Injetando JwtService corretamente

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];

    try {
      const decoded = this.jwtService.verify(token);
      request.user = decoded;
      return true;
    } catch {
      return false;
    }
  }
}