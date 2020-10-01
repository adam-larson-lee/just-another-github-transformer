import { Module } from '@nestjs/common';
import { GithubModule } from '../github.module';
import { GithubRepoService } from './github-repo.service';

@Module({
  imports: [GithubModule],
  providers: [GithubRepoService],
})

export class GithubRepoModule {};
