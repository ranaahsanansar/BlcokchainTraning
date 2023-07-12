import { Test, TestingModule } from '@nestjs/testing';
import { ArmyController } from './army.controller';

describe('ArmyController', () => {
  let controller: ArmyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArmyController],
    }).compile();

    controller = module.get<ArmyController>(ArmyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
