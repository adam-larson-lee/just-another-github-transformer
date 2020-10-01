import { Test, TestingModule } from '@nestjs/testing';
import { GithubUserRepoTransformService } from './github-user-repo-transform.service';

describe('GithubUserRepoTransformService', () => {
  let service: GithubUserRepoTransformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubUserRepoTransformService],
    }).compile();

    service = module.get<GithubUserRepoTransformService>(GithubUserRepoTransformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
