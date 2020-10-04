import { GithubRepo } from '../github-repo';

describe('GithubRepo', () => {
  it('should be defined', () => {
    expect(new GithubRepo()).toBeDefined();
  });
});
