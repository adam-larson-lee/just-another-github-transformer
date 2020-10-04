import { HttpModule, HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [GithubService],
    }).compile();

    service = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const uri = 'users/test';
  const token = 'abc123';
  process.env.TOKEN = token;

  const observable = {
    pipe: jest.fn(),
  } as unknown as Observable<AxiosResponse<any>>;

  const httpService = {
    get: jest.fn(() => observable),
  } as unknown as HttpService;

  const githubService = new GithubService(httpService);
  githubService.get(uri);

  it('should call the github api with the given uri', () => {
    expect(httpService.get).toHaveBeenCalledWith(
      `https://api.github.com/${uri}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      });
  });

});
