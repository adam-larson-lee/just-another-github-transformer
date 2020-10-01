import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  get(uri: string): Observable<AxiosResponse<any>> {
    console.log(uri);
    return this
      .httpService
      .get(
        `https://api.github.com/${uri}`,
        {
          headers: {
            Authorization: `token fa91db9d420b9299a19ab16d33dc66eb6dbd6743 `,
          },
        },
      ).pipe(
        map(response => response.data)
      );
  }
}
