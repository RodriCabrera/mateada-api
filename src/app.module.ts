import { Module } from '@nestjs/common';
import { MeetupsModule } from './meetups/meetups.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MeetupsModule, MongooseModule.forRoot(process.env.MONGO_URL)],
})
export class AppModule {}
