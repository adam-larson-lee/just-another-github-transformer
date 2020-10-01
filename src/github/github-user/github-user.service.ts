import { Injectable } from '@nestjs/common';
import { GithubService } from '../github.service';

@Injectable()
export class GithubUserService {
  constructor(private githubService: GithubService) {}

  getUser(username: string) {
    return this
      .githubService
      .get(`users/${username}`);
  }
};
