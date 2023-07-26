import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Product {
  @Prop({
    require: true,
    trim: true,
  })
  nombre: string;
  @Prop({
    require: true,
    trim: true,
  })
  imagen: string;
  @Prop({
    require: true,
    trim: true,
  })
  descipcion: string;
  @Prop({
    trim: true,
    default: 0,
  })
  Precio: number;
  @Prop({
    trim: true,
    default: 0,
  })
  stock: number;
  @Prop({
    trim: true,
  })
  estado: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
