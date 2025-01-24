import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from '../config/configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { UserSettingsModule } from './user-settings/user-settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    SettingsModule,
    UserSettingsModule,
  ],
})
export class AppModule {}
