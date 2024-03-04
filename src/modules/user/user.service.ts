import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserDocument } from './user.interface';
import UserModel from './user.modal';
import { MessagesMapping } from '@/config/messages-mapping';
import { CreateUserDto } from './dtos/create-user.dto';
import { BaseService } from '../base/base.service';

@Injectable()
export class UserService extends BaseService {
  constructor(protected readonly repository: typeof UserModel) {
    super(repository);
  }

  async getLoggedinUserDetails(userId: string): Promise<IUserDocument> {
    const user = await this.repository.findById(userId);

    if (!user) {
      throw new HttpException(MessagesMapping['#9'], HttpStatus.NOT_FOUND);
    }

    user.password = undefined;

    return user;
  }

  async deleteLoggedinUserDetails(userId: string): Promise<IUserDocument> {
    const user = await this.repository.deleteOne({ _id: userId });

    if (!user) {
      throw new HttpException(MessagesMapping['#9'], HttpStatus.NOT_FOUND);
    }

    return;
  }

  async create(userDto: CreateUserDto): Promise<IUserDocument> {
    const user = await this.repository.create(userDto);

    return user;
  }
}