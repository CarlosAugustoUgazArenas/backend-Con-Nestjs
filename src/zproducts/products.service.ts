import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto, UpdateProductDto } from 'src/dto/product.dto';
import { Product } from 'src/schemas/products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  finAll() {
    return this.productModel.find();
  }
  async create(createProduct: CreateProductDto) {
    const newproducts = new this.productModel(createProduct);
    await newproducts.save();
    return newproducts;
  }
  async findOne(id: string) {
    return this.productModel.findById(id);
  }
  async delete(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
  async update(id: string, Product: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, Product, { new: true });
  }
}
