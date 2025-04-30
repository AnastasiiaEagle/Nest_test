import { Body, Controller, Get, Headers, Param, Post, Query, Req, Res } from '@nestjs/common';
import { Response } from 'express';


@Controller({
  path: 'movies',
  // host: '' // хост з якого буде здійснено запит
})
export class MovieController {

  @Get()
  findAll(@Query('genre') query: any){ // КВЕРІ ПАРАМЕТРИ
    return JSON.stringify(query);
  }

  @Post()
  create(@Body() body: {title: string; genre: string}){
    return body;
  }

  @Get('headers')
  getHeaders(@Headers() headers: any){
    return headers;
  }

  @Get('user')
  getUserAgent(@Headers('user-agent') userAgent: string){
    return { userAgent };
  }

  @Get('req')
  getRequestDetails(@Req() req: Request){
    return {
      method: req.method,
      url: req.url
    }
  }

  @Get('res')
  getResponseDetails(@Res() res: Response){
    res.status(201).json({message: 'hello'})
  }

  @Get(':id')
  findById(@Param('id') id:string){
    return {id}
  }
}
