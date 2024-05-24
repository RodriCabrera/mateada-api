import { Module } from '@nestjs/common';
import { MeetupsModule } from './meetups/meetups.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MeetupsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
})
export class AppModule {}
