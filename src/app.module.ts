import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { TypegooseModule } from "nestjs-typegoose";

@Module({
  imports: [TypegooseModule.forRoot("mongodb://localhost:27017/blog", {
      useNewUrlParser: true
    }),
    TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
