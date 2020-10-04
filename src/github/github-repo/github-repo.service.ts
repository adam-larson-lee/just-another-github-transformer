import { Injectable } from '@nestjs/common';
import { GithubService } from '../github.service';
import { GithubRepo } from './github-repo';

@Injectable()
export class GithubRepoService {
  constructor(private githubService: GithubService) {}

  getRepos(username: string) {
    return this
      .githubService
      .get<GithubRepo[]>(`users/${username}/repos`);
  }
};
