import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto';
import { User } from 'src/schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  finAll() {
    return this.userModel.find();
  }
  async create(createuser: CreateUserDto) {
    const newusers = new this.userModel(createuser);
    await newusers.save();
    return newusers;
  }
  async findOne(id: string) {
    return this.userModel.findById(id);
  }
  async delete(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
  async update(id: string, User: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, User, { new: true });
  }
}
