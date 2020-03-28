import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

// import * as mongoose from 'mongoose';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // 数据库连接
  // mongoose.connect('mongodb://localhost:27017/blog', {
  //   useNewUrlParser: true,
  //   useFindAndModify: false,
  //   useCreateIndex:true,
  //  // useUnifiedTopology: true,
  // });

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // swagger文档配置
  const options = new DocumentBuilder()
    .setTitle('Nest Blog')
    .setDescription('blog swagger')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();
