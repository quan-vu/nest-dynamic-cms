import { Controller, Get } from '@nestjs/common';
import { NestDynamicCmsService } from './nest-dynamic-cms.service';

@Controller()
export class NestDynamicCmsController {
  constructor(private readonly nestDynamicCmsService: NestDynamicCmsService) {}

  @Get('schemas')
  getSchemas(): object {
    return this.nestDynamicCmsService.getSchemas();
  }
}
