/* import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from './users.schema';

import mongoose from 'mongoose';
import { Product } from './products.schema';

@Schema({
  timestamps: true,
})
export class Order {
  @Prop({
    ref: User.name,
    require: true,
    trim: true,
  })
  User: User;
  orderItems: [
    {
      nombre: { type: String; required: true };
      cantidad: { type: Number; required: true };
      imagenpro: { type: String; required: true };
      precio: { type: String; required: true };
    },
    @Prop({
      ref: User.name,
      require: true,
      trim: true,
    })
      product: Product
  ];

  direccionEnvio: {
    direccion: { type: String; required: true };
    ciudad: { type: String; required: true };
    codigopostal: { type: String; required: true };
    pais: { type: String; required: true };
  };

  paymentMethod: {
    type: String;
    required: true;
    default: 'Paypal';
  };

  paymentResult: {
    id: { type: String };
    estado: { type: String };
    update_time: { type: String };
    email_address: { type: String };
  };

  taxPrice: {
    type: Number;
    required: true;
    default: 0.0;
  };

  shippingPrice: {
    type: Number;
    required: true;
    default: 0.0;
  };

  totalPrice: {
    type: Number;
    required: true;
    default: 0.0;
  };

  isPaid: {
    type: Boolean;
    //required: true;
    default: false;
  };

  paidAt: {
    type: Date;
  };

  isDelivered: {
    type: Boolean;
    //required: true;
    default: false;
  };

  deliveredAt: {
    type: Date;
  };
}

export const OrderSchema = SchemaFactory.createForClass(Order);
 */
