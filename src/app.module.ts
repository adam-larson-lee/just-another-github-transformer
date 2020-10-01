import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubUserModule } from './github/github-user/github-user.module';

@Module({
  imports: [GithubUserModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {};
