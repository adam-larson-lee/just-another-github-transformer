import { Injectable } from '@nestjs/common';
import { GithubService } from '../github.service';

@Injectable()
export class GithubRepoService {
  constructor(private githubService: GithubService) {}

  getRepos(username: string) {
    return this
      .githubService
      .get(`users/${username}/repos`);
  }
};
