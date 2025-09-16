
import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiResolver } from './ai.resolver';
import { PrismaService } from '../database/prisma.service';

@Module({
  providers: [AiService, AiResolver, PrismaService],
  exports: [AiService]
})
export class AiModule {}
