import { Module } from '@nestjs/common';
import { NestDynamicCmsService } from './nest-dynamic-cms.service';

@Module({
  providers: [NestDynamicCmsService],
  exports: [NestDynamicCmsService],
})
export class NestDynamicCmsModule {}
