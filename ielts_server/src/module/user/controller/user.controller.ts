import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { User } from 'src/lib/entity/user/user.entity';
import { UserService } from '../service/user.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/shared/constant/meta-data';
import { UpdateUserDto } from '../dto/update-user.dto';

@ApiTags('user')
@Controller('user')
@ApiResponse({
  status: 200,
  description: 'OK',
  content: {
    ApiResponse: {
      example: 'OK ',
    },
  },
})
@ApiResponse({ status: 404, description: 'Not Found' })
@ApiResponse({ status: 500, description: 'Server Error' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiBearerAuth()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @Public()
  async update(
    @Param('id') id: string,
    @Body() updateUser: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
