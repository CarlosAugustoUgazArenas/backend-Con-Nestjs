//import { IsString, IsOptional, IsNotEmpty, IsArray } from 'class-validator';
import {
  DireccionEnvio,
  OrderItem,
  PaymentResult,
} from 'src/schemas/orders.schema2';
import { User } from 'src/schemas/users.schema';

export class CreateOrderDto {
  user: User;

  /* orderItems: OrderItem[]; */

  direccionEnvio: DireccionEnvio;

  paymentMethod: string;

  paymentResult: PaymentResult;

  taxPrice: number;

  shippingPrice: number;

  totalPrice: number;

  isPaid: boolean;

  paidAt: Date;

  isDelivered: boolean;

  deliveredAt: Date;
}
export class UpdateOrderDto {
  user?: User;

  /* orderItems?: OrderItem[]; */

  direccionEnvio?: DireccionEnvio;

  paymentMethod?: string;

  paymentResult?: PaymentResult;

  taxPrice?: number;

  shippingPrice?: number;

  totalPrice?: number;

  isPaid?: boolean;

  paidAt?: Date;

  isDelivered?: boolean;

  deliveredAt?: Date;
}
