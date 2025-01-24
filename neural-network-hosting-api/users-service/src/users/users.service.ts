import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly rep: Repository<User>) {}

  async getById(userId: number): Promise<User> {
    const user: User | null = await this.rep.findOneBy({
      id: userId,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async getByEmail(email: string): Promise<User | null> {
    if (!email) {
      throw new BadRequestException("There is no email")
    }

    return this.rep.findOneBy({
      email
    })
  }

  async save(dto: CreateUserDto): Promise<void> {
    const user: User = this.rep.create(dto);

    if (!dto.email) {
      throw new BadRequestException('Email is not found in body');
    }

    if (!dto.password) {
      throw new BadRequestException('Password is not found in body');
    }

    try {
      await this.rep.save(user)
    } catch (e) {
      throw new BadRequestException(e.message ?? "The user exists")
    }
  }
}
