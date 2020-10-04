import { GithubUser } from '../github-user';

describe('GithubUser', () => {
  it('should be defined', () => {
    expect(new GithubUser()).toBeDefined();
  });
});
