import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateeTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    private tasks = [
        {
          id: 1,
          title: "Hello",
          isCompleted: false,
        },
        {
          id: 2,
          title: "Hello 2",
          isCompleted: true,
        },
    ];

    findAll(){
        return this.tasks
    }

    findById(id: number){
        const task = this.tasks.find((task)=>task.id === id);

        if(!task){
            throw new NotFoundException('Task not found')
        }

        return task;
    }

    create(dto: CreateTaskDto){
        const newTask = {
            id: this.tasks.length + 1,
            title: dto.title,
            isCompleted: false
        }

        this.tasks.push(newTask)
        return this.tasks
    }

    update(id: number, dto: UpdateeTaskDto){
        const task = this.findById(id);

        task.title = dto.title;
        task.isCompleted = dto.isCompleted;

        return task
    }

    putchUpdate(id: number, dto: Partial<UpdateeTaskDto>){
        const task = this.findById(id);
        Object.assign(task, dto);
        return task;
    }

    delete(id: number){
        const task = this.findById(id)
        this.tasks = this.tasks.filter((t)=> t.id !== task.id);

        return task;
    }
}
