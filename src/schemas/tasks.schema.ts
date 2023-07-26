import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// Este código define un esquema Mongoose para representar tareas con título, descripción y estado.
// El esquema incluye opciones para hacer que el título sea único y requerido, y el estado tiene un valor predeterminado de true.
@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    unique: true,
    require: true,
    trim: true,
  })
  title: string;
  @Prop({
    trim: true,
  })
  description: string;
  @Prop({
    default: true,
  })
  status: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
