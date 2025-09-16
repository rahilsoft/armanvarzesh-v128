import { Controller, Get } from '@nestjs/common';
@Controller()
export class HealthController {
  @Get('/health') health(){ return { ok:true } }
  @Get('/ready') ready(){ return { ready:true } }
}
