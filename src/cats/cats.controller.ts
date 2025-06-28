import { CatsService } from './cats.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  findAll(@Query('age') age: number, @Query('breed') breed: string): string {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  @Get('breed')
  getBreed(): string {
    console.log('inside /cats/breed');
    return 'this returns all cat breeds';
  }

  @Get(':id')
  getCatById(@Param('id') id: number): string {
    console.log('i get there' + id);
    return 'user request the cat with id:' + id;
  }

  @Get('breed/:id')
  getBreedBuId(
    @Res({ passthrough: true }) res,
    @Param('id') id: number,
  ): string {
    return 'This returns Cats Breed with following params' + id;
  }

  @Post()
  @HttpCode(204)
  create(@Body() dto: CreateCatDto) {
    console.log('Got request to create new cat with folliwing object', dto);
    this.catService.create(dto);
    return 'This create the new cat';
  }

  @Get('redirect')
  @Redirect('https://google.com/', 302)
  getDocs(@Query('version') version?: number) {
    console.log('user request documents with version', version);
    return 'user request documents with version' + version && version;
  }
}
