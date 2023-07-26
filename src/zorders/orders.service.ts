import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto, UpdateOrderDto } from 'src/dto/order.dto';
import { Order } from 'src/schemas/orders.schema2';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private baseModel: Model<Order>) {}

  finAll() {
    return this.baseModel.find();
  }
  async create(createProduct: CreateOrderDto) {
    const newBase = new this.baseModel(createProduct);
    await newBase.save();
    return newBase;
  }
  async findOne(id: string) {
    return this.baseModel.findById(id);
  }
  async delete(id: string) {
    return this.baseModel.findByIdAndDelete(id);
  }
  async update(id: string, Product: UpdateOrderDto) {
    return this.baseModel.findByIdAndUpdate(id, Product, { new: true });
  }
}
