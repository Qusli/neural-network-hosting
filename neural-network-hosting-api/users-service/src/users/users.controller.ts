import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<User> {
    return this.service.getById(id);
  }

  // TODO: Delete this
  @Post('/save')
  async save(@Body() dto: CreateUserDto): Promise<void> {
    return this.service.save(dto);
  }
}
