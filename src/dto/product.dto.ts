import { IsString, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  imagen: string;

  @IsBoolean()
  @IsNotEmpty()
  descipcion: string;

  @IsBoolean()
  @IsOptional()
  Precio: number;

  @IsBoolean()
  @IsOptional()
  stock: number;

  @IsBoolean()
  @IsOptional()
  estado: boolean;
}

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  imagen?: string;

  @IsBoolean()
  @IsOptional()
  descipcion?: string;

  @IsBoolean()
  @IsOptional()
  Precio?: number;

  @IsBoolean()
  @IsOptional()
  stock?: number;

  @IsBoolean()
  @IsOptional()
  estado?: boolean;
}
