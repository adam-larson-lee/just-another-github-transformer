import { Injectable } from '@nestjs/common';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubRepoService } from 'src/github/github-repo/github-repo.service';
import { GithubUserService } from 'src/github/github-user/github-user.service';

@Injectable()
export class UserService {
  constructor(
    private githubUserService: GithubUserService,
    private githubRepoService: GithubRepoService,
  ) {}

  getUser(username: string) {
    const githubUser = this.githubUserService.getUser(username);
    const githubRepos = this.githubRepoService.getRepos(username);
    return zip(githubUser, githubRepos)
      .pipe(
        map(([githubUser, githubRepos]) => ({
          user_name: githubUser.data.login,
          display_name: githubUser.data.name,
          avatar: githubUser.data.avatar_url,
          geo_location: githubUser.data.location,
          email: githubUser.data.email,
          url: githubUser.data.html_url,
          created_at: githubUser.data.created_at.replace('T', ' ').replace('Z', ''),
          repos: githubRepos.data.map((repo) => {
            return {
              name: repo.name,
              url: repo.html_url,
            };
          }),
        }))
      );
  }
};
