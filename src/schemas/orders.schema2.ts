import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from './users.schema';
import { Product } from './products.schema';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class OrderItem {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  cantidad: number;

  @Prop({ required: true })
  imagenpro: string;

  @Prop({ required: true })
  precio: string;

  @Prop({
    required: true,
    ref: Product.name,
    type: mongoose.Schema.Types.ObjectId,
  })
  product: Product;
}
export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@Schema({ timestamps: true })
export class DireccionEnvio {
  @Prop({ required: true })
  direccion: string;

  @Prop({ required: true })
  ciudad: string;

  @Prop({ required: true })
  codigopostal: string;

  @Prop({ required: true })
  pais: string;
}

@Schema({ timestamps: true })
export class PaymentResult {
  @Prop()
  id: string;

  @Prop()
  estado: string;

  @Prop()
  update_time: string;

  @Prop()
  email_address: string;
}

@Schema({ timestamps: true })
export class Order {
  @Prop({
    required: true,
    ref: User.name,
    type: mongoose.Schema.Types.ObjectId,
  })
  user: User;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.Array,
    items: OrderItemSchema,
  })
  orderItems: OrderItem[];

  @Prop({ required: true, type: DireccionEnvio })
  direccionEnvio: DireccionEnvio;

  @Prop({ required: true, default: 'Paypal' })
  paymentMethod: string;

  @Prop({ type: PaymentResult })
  paymentResult: PaymentResult;

  @Prop({ required: true, default: 0.0 })
  taxPrice: number;

  @Prop({ required: true, default: 0.0 })
  shippingPrice: number;

  @Prop({ required: true, default: 0.0 })
  totalPrice: number;

  @Prop({ required: true, default: false })
  isPaid: boolean;

  @Prop()
  paidAt: Date;

  @Prop({ required: true, default: false })
  isDelivered: boolean;

  @Prop()
  deliveredAt: Date;
}

//export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
