import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
// import { testModel } from './test.model';
import {IsNotEmpty} from 'class-validator';
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { Test } from './test.model';

class testCreateDto {
    @ApiProperty({enum:['标题']})
    @IsNotEmpty({message:'请填写标题'})
    title: string
    @ApiProperty({enum:['详情']})
    @IsNotEmpty({message:'请填写详情'})
    content: string
}

@Controller('test')
@ApiTags('test')
export class TestController {
    constructor(
        @InjectModel(Test) private readonly testModel: ReturnModelType<typeof Test>
      ) {}

    @Get()
    @ApiOperation({ summary: '列表' })
    async list() {
        return await this.testModel.find();
    }

    @Post()
    @ApiOperation({ summary: '创建' })
    async create(@Body() body: testCreateDto) {
        await this.testModel.create(body);
        return {
            success:true,
        };
    }

    @Get(':id')
    @ApiOperation({ summary: '详情' })
    async detail(@Param('id') id: string) {
        return await this.testModel.findById(id);
    }

    @Put(':id')
    @ApiOperation({ summary: '编辑' })
    async update(@Param('id') id: string, @Body() body: testCreateDto) {
        await this.testModel.findByIdAndUpdate(id,body);
        return {
            success:true,
        };
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除' })
    async remove(@Param('id') id: string) {
        return await this.testModel.findByIdAndRemove(id);
    }
}
