import { Test, TestingModule } from '@nestjs/testing';
import { GithubRepoModule } from '../../github/github-repo/github-repo.module';
import { GithubUserModule } from '../../github/github-user/github-user.module';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GithubUserModule, GithubRepoModule],
      providers: [UserService],
      controllers: [UserController],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
