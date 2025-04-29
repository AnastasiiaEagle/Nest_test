import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateeTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(){
    return this.tasksService.findAll()
  }

  @Get('by-id/:id')
  findAllId(@Param('id') id:string){
    return this.tasksService.findById(Number(id));
  }

  @Post()
  create(@Body() dto:CreateTaskDto){
    return this.tasksService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id:string, @Body() dto:UpdateeTaskDto){
    return this.tasksService.update(+id, dto);
  }

  @Patch(':id')
  putchUpdate(@Param('id') id:string, @Body() dto:Partial<UpdateeTaskDto>){
    return this.tasksService.putchUpdate(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id:string){
    return this.tasksService.delete(+id);
  }
}
