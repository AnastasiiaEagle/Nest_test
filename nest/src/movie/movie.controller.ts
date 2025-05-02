import { Body, Controller, Delete, Get, Headers, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';


@Controller({
  path: 'movies',
  // host: '' // хост з якого буде здійснено запит
})
export class MovieController {

  constructor(private readonly movieService: MovieService){}

  @Get()
  findAll(){
    return this.movieService.findAll();
  }

  @Post()
  create(@Body() dto: MovieDto){
    return this.movieService.create(dto);
  }

  @Get(':id')
  findById(@Param('id') id: string){
    return this.movieService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: MovieDto){
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return this.movieService.delete(id);
  }

  // @Get()
  // findAll(@Query('genre') query: any){ // КВЕРІ ПАРАМЕТРИ
  //   return JSON.stringify(query);
  // }

  // @Post()
  // create(@Body() body: {title: string; genre: string}){
  //   return body;
  // }

  // @Get('headers')
  // getHeaders(@Headers() headers: any){
  //   return headers;
  // }

  // @Get('user')
  // getUserAgent(@Headers('user-agent') userAgent: string){
  //   return { userAgent };
  // }

  // @Get('req')
  // getRequestDetails(@Req() req: Request){
  //   return {
  //     method: req.method,
  //     url: req.url
  //   }
  // }

  // @Get('res')
  // getResponseDetails(@Res() res: Response){
  //   res.status(201).json({message: 'hello'})
  // }

  // @Get(':id')
  // findById(@Param('id') id:string){
  //   return {id}
  // }
}
