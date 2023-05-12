import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  NotFoundException,
} from '@nestjs/common';

import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjaService: NinjasService) {} //dependency injection
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'warriors') {
    // const service = new NinjasService();
    return this.ninjaService.getNinja(weapon);
  }

  @Get(':id')
  getSingleNinja(@Param('id') id: string) {
    try {
      return this.ninjaService.getSingleNinja(+id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
  }
  @Put(':id')
  updateSingleNinja(
    @Param('id') id: string,
    @Body() updateNinjaDto: UpdateNinjaDto,
  ) {
    return this.ninjaService.updateNinja(+id, updateNinjaDto);
  }
  @Delete(':id')
  removeSingleNinja(@Param('id') id: string) {
    return this.ninjaService.removeNinja(+id);
  }
}
