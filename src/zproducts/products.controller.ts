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
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.finAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.productsService.findOne(id);
    if (!task) throw new NotFoundException('Tarea no encontrada');
    return task;
  }
  @Post()
  async create(@Body() createTaskDto: CreateProductDto) {
    try {
      return await this.productsService.create(createTaskDto);
    } catch (error) {
      if (error.code == 11000) {
        throw new ConflictException('Creacion de Tarea Fallida');
      }
    }
  }
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.productsService.delete(id);
    if (!task) throw new NotFoundException('Tarea no encontrada');
    return task;
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateTaskDto);
  }
}
