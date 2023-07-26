import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    require: true,
    trim: true,
  })
  name: string;
  @Prop({
    require: true,
    trim: true,
  })
  email: string;
  @Prop({
    require: true,
    trim: true,
  })
  password: string;
  @Prop({
    require: true,
    trim: true,
  })
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
