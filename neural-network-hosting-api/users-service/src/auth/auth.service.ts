import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegistrationUserDto } from './dto/registration-user.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { comparePassword } from 'src/users/helpers/hashing-password.helper';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async login(dto: LoginUserDto) {
        if (!dto.email) {
            throw new BadRequestException("Email is not found in body")
        }

        if (!dto.password) {
            throw new BadRequestException("Password is not found in body")
        }

        const user: User | null = await this.usersService.getByEmail(dto.email)

        if (!user) {
            throw new BadRequestException("There is no user")
        }

        if (!comparePassword(dto.password, user.password)) {
            throw new BadRequestException("Passwords are different")
        }
        
        // TODO: add token actions
    }

    async registration(dto: RegistrationUserDto) {
        if (dto.password !== dto.recoveryPassword) {
            throw new BadRequestException("Passwords are different")
        }

        if (!dto.email) {
            throw new BadRequestException("Email is not found in body")
        }

        if (!dto.password) {
            throw new BadRequestException("Password is not found in body")
        }

        // TODO: add token actions
    }
}
