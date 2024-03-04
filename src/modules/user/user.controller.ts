import { Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

export class UserController {
  constructor(private readonly service: UserService) {}

  async create(@Body() data: CreateUserDto) {
    return this.service.create(data);
  }

  async getLoggedinUserDetails(user: any) {
    return this.service.getLoggedinUserDetails(user._id);
  }

  async deleteLoggedinUserDetails(user: any) {
    return this.service.deleteLoggedinUserDetails(user._id);
  }

  async updateById(@Param('id') id: string, @Body() data: any) {
    return this.service.updateById(id, data);
  }

  async findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  async deleteById(@Param('id') id: string) {
    this.service.deleteById(id);
  }
}
