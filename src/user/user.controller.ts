import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Get(':username')
  getUser(@Param('username') username: string) {
    return this.userService.getUser(username);
  }
};
