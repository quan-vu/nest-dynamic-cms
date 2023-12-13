import { Test, TestingModule } from '@nestjs/testing';
import { NestDynamicCmsService } from './nest-dynamic-cms.service';

describe('NestDynamicCmsService', () => {
  let service: NestDynamicCmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestDynamicCmsService],
    }).compile();

    service = module.get<NestDynamicCmsService>(NestDynamicCmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
