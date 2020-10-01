import { Module } from '@nestjs/common';
import { GithubModule } from '../github.module';
import { GithubUserService } from './github-user.service';

@Module({
  imports: [GithubModule],
  providers: [GithubUserService],
})

export class GithubUserModule {};
