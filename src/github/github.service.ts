import { HttpException, HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  get<T>(uri: string,): Observable<AxiosResponse<T>> {
    return this
      .httpService
      .get(
        `https://api.github.com/${uri}`,
        process.env.TOKEN ? {
          headers: {
            Authorization: `token ${process.env.TOKEN}`,
          },
        } : null,
      ).pipe(
        catchError(e => {
          throw new HttpException(e.response.data, e.response.status)
        })
      );
  }
}
