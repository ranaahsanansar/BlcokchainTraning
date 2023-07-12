import { Test, TestingModule } from '@nestjs/testing';
import { ArmyService } from './army.service';

describe('ArmyService', () => {
  let service: ArmyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmyService],
    }).compile();

    service = module.get<ArmyService>(ArmyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
