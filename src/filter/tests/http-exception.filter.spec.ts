import { ArgumentsHost, HttpException } from '@nestjs/common';
import { HttpExceptionFilter } from '../http-exception.filter';

describe('HttpExceptionFilter', () => {
  it('should be defined', () => {
    expect(new HttpExceptionFilter()).toBeDefined();
  });

  const statusCode = 404;
  let timestamp;
  const path = 'https://www.test.com';

  const httpException = new HttpException('response', statusCode);

  const response = {
    status: jest.fn(() => response),
    json: jest.fn((args) => {
      timestamp = args.timestamp;
    }),
  };

  const request = {
    url: path,
  };

  const ctx = {
    getResponse: <T>() => response,
    getRequest: <T>() => request,
  };

  const argumentsHost = {
    switchToHttp: () => ctx,
  } as ArgumentsHost;

  const httpExceptionFilter  = new HttpExceptionFilter();
  httpExceptionFilter.catch(httpException, argumentsHost);

  it('should set response status', () => {
    expect(response.status).toBeCalledTimes(1);
    expect(response.status).toBeCalledWith(statusCode);
  });

  it('should set response json', () => {
    expect(response.json).toHaveBeenCalledTimes(1);
    expect(response.json).toHaveBeenCalledWith({
      statusCode,
      timestamp,
      path,
    });
  });
});
