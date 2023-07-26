import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/schemas/tasks.schema';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  finAll() {
    return this.taskModel.find();
  }
  async create(createTask: CreateTaskDto) {
    const newTasks = new this.taskModel(createTask);
    await newTasks.save();
    return newTasks;
  }
  async findOne(id: string) {
    return this.taskModel.findById(id);
  }
  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
  async update(id: string, task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }
}
