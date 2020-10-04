import { Test, TestingModule } from '@nestjs/testing';
import { GithubModule } from '../../github.module';
import { GithubUserService } from '../github-user.service';

describe('GithubUserService', () => {
  let service: GithubUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GithubModule],
      providers: [GithubUserService],
    }).compile();

    service = module.get<GithubUserService>(GithubUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
