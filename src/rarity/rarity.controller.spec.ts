import { Test, TestingModule } from '@nestjs/testing';
import { RarityController } from './rarity.controller';

describe('RarityController', () => {
  let controller: RarityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RarityController],
    }).compile();

    controller = module.get<RarityController>(RarityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
