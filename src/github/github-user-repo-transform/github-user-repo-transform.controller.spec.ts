import { Test, TestingModule } from '@nestjs/testing';
import { GithubUserRepoTransformController } from './github-user-repo-transform.controller';

describe('GithubUserRepoTransformController', () => {
  let controller: GithubUserRepoTransformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubUserRepoTransformController],
    }).compile();

    controller = module.get<GithubUserRepoTransformController>(GithubUserRepoTransformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
