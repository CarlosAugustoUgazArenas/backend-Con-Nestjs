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
import { OrdersService } from './orders.service';
import { CreateOrderDto, UpdateOrderDto } from 'src/dto/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private baseService: OrdersService) {}

  @Get()
  findAll() {
    return this.baseService.finAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.baseService.findOne(id);
    if (!task) throw new NotFoundException('No encontrada');
    return task;
  }
  @Post()
  async create(@Body() createBaseDto: CreateOrderDto) {
    try {
      return await this.baseService.create(createBaseDto);
    } catch (error) {
      if (error.code == 11000) {
        throw new ConflictException('Creacion de Fallida');
      }
    }
  }
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const task = await this.baseService.delete(id);
    if (!task) throw new NotFoundException('no encontrada');
    return task;
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBasekDto: UpdateOrderDto,
  ) {
    return this.baseService.update(id, updateBasekDto);
  }
}
