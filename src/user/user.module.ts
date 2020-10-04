import { Module } from '@nestjs/common';
import { GithubRepoModule } from 'src/github/github-repo/github-repo.module';
import { GithubUserModule } from 'src/github/github-user/github-user.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [GithubUserModule, GithubRepoModule],
  providers: [UserService],
  controllers: [UserController],
})

export class UserModule {};
