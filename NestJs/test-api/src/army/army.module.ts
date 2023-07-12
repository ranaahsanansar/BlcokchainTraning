import { Module } from '@nestjs/common';
import { ArmyController } from './army.controller';
import { ArmyService } from './army.service';

@Module({
  controllers: [ArmyController],
  providers: [ArmyService]
})
export class ArmyModule {}
