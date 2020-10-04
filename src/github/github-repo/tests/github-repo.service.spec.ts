import { Test, TestingModule } from '@nestjs/testing';
import { GithubModule } from '../../github.module';
import { GithubRepoService } from '../github-repo.service';

describe('GithubRepoService', () => {
  let service: GithubRepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GithubModule],
      providers: [GithubRepoService],
    }).compile();

    service = module.get<GithubRepoService>(GithubRepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
