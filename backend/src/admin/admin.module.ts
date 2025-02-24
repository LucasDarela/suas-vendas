import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { AuthModule } from "../auth/auth.module"; // 🔥 Importamos o AuthModule
import { User } from "../auth/user.entity"; // Importamos a entidade User

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([User])], // 🔥 Agora temos acesso ao UserRepository
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}