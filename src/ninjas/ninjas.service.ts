import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'ninja-1', weapon: 'stars' },
    { id: 2, name: 'ninja-2', weapon: 'warriors' },
  ];

  getNinja(weapon?: 'stars' | 'warriors') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getSingleNinja(id: Number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const pupNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(pupNinja);
  }

  updateNinja(id: Number, updateNinjaDto: UpdateNinjaDto) {
    const validNinja = this.ninjas.filter((ninja) => ninja.id === id);
    if (validNinja) {
      return {
        ...validNinja,
        ...updateNinjaDto,
      };
    }
    return validNinja;
    // return updateNinjaDto;
  }

  removeNinja(id: number) {
    const toBeremoved = this.getSingleNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return toBeremoved;
  }
}
