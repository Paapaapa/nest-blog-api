import { Module } from '@nestjs/common';
import { TypegooseModule } from "nestjs-typegoose";
import { TestController } from './test.controller';
import { Test } from './test.model';

@Module({
  imports: [TypegooseModule.forFeature([Test])],
  controllers: [TestController]
})
export class TestModule {}
