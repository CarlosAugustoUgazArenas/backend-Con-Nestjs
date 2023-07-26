import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.finAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.usersService.findOne(id);
    if (!task) throw new NotFoundException('Tarea no encontrada');
    return task;
  }
  @Post()
  async create(@Body() createTaskDto: CreateUserDto) {
    try {
      return await this.usersService.create(createTaskDto);
    } catch (error) {
      if (error.code == 11000) {
        throw new ConflictException('Creacion de Tarea Fallida');
      }
    }
  }
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.usersService.delete(id);
    if (!task) throw new NotFoundException('Tarea no encontrada');
    return task;
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateUserDto) {
    return this.usersService.update(id, updateTaskDto);
  }
}
