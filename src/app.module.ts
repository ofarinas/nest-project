import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ofarinas12:123@cluster0-qg49r.mongodb.net/test?retryWrites=true&w=majority'), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class  AppModule {}
