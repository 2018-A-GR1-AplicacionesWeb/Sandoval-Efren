import {Get, Controller, UseGuards, ReflectMetadata} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@UseGuards(JwtGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ReflectMetadata("necesitaProteccion", false)
  root(): string {
    return this.appService.root();
  }

  @Get()
  @ReflectMetadata("necesitaProteccion", true)
  
}
