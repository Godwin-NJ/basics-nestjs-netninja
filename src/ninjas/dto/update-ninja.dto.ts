// import{partialType} from '@nestjs/mapped-types'
import { CreateNinjaDto } from './create-ninja.dto';
export class UpdateNinjaDto extends CreateNinjaDto {
  name: string;
  weapon: 'stars' | 'warriors';
}
