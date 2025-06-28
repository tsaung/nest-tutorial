import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This return all cats by thant sin';
  }

  @Get(':id')
  getCatById(@Param() params): string {
    console.log('i get there' + params.id);
    return 'user request the cat with id:' + (params.id && params.id) ;
  }

  @Get('breed/*id')
  getBreed(@Res({ passthrough: true }) res, @Param('id') id): string {
    return 'This returns Cats Breed with following params' + id;
  }

  @Post()
  @HttpCode(204)
  create() {
    return 'This create the new cat';
  }

  @Get('redirect')
  @Redirect('https://google.com/', 302)
  getDocs(@Query('version') version?: number) {
    console.log('user request documents with version', version);
    return 'user request documents with version' + version && version;
  }
}
