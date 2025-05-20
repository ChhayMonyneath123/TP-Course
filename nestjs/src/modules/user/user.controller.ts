import {
  Get,
  Param,
  Controller,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './user.service';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/:username')
  getUser(@Param('username') username: string) {
    return this.userService.getUser(username);
  }

  @Post('/users')
  createUser(
    @Body() body: { username: string; email: string; password: string },
  ) {
    return this.userService.createUser(body);
  }

  @Patch('/users/:username')
  updateUser(
    @Param('username') username: string,
    @Body() body: { email?: string; password?: string },
  ) {
    return this.userService.updateUser(username, body);
  }

  @Delete('/users/:username')
  deleteUser(@Param('username') username: string) {
    return this.userService.deleteUser(username);
  }
}
