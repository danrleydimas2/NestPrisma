import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Nome completo do usuario' })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ description: 'Email do usuario' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({
    description: 'Define se o usuario é admistrador',
    default: false,
  })
  @IsBoolean()
  admin: boolean;
}
