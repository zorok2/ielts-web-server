import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthService } from './service/auth.service';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/module/auth/guard/auth.guard';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JWTService } from './service/jwt.service';
import { PermissionLectureGuard } from './guard/permission.guard';
import { PermissionAdminGuard } from './guard/permissionAdmin.guard';

@Module({
	imports: [
		UserModule,
		PassportModule,
		JwtModule.registerAsync({
			global: true,
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get<string>('JWT_PRIVATE_KEY'),
				signOptions: {
					expiresIn: configService.get<string>('JWT_EXPIRED_TIMER'),
				},
			}),
			inject: [ConfigService],
		}),
	],
	controllers: [AuthController],
	providers: [
		PermissionLectureGuard,
		PermissionAdminGuard,
		JwtStrategy,
		AuthService,
		JWTService,
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
	],
	exports: [PermissionLectureGuard, AuthService, PermissionAdminGuard],
})
export class AuthModule {}
