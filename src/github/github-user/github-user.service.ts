import { Injectable } from '@nestjs/common';
import { GithubService } from '../github.service';
import { GithubUser } from './github-user';

@Injectable()
export class GithubUserService {
  constructor(private githubService: GithubService) {}

  getUser(username: string) {
    return this
      .githubService
      .get<GithubUser>(`users/${username}`);
  }
};
