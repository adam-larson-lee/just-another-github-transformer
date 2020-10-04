import { Test, TestingModule } from '@nestjs/testing';
import { GithubRepoModule } from '../../github/github-repo/github-repo.module';
import { GithubUserModule } from '../../github/github-user/github-user.module';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GithubUserModule, GithubRepoModule],
      providers: [UserService],
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
