import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegistrationUserDto } from './dto/registration-user.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post("/sign-in")
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginUserDto) {
    return this.service.login(dto)
  }

  @Post("/sign-up")
  @HttpCode(HttpStatus.OK)
  async registration(@Body() dto: RegistrationUserDto) {
    return this.service.registration(dto)
  }
}
