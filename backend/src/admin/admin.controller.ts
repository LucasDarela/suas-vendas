import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard) // Apenas usuários autenticados podem acessar
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('clientes')
  getClientesDoSaas() {
    return this.adminService.getClientes();
  }
}