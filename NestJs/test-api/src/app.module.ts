import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArmyModule } from './army/army.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ArmyModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
