import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubUserModule } from './github/github-user/github-user.module';

@Module({
  imports: [ConfigModule.forRoot(), GithubUserModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {};
