import { Module } from '@nestjs/common';
import { MeetupsController } from './meetups.controller';
import { MeetupsService } from './meetups.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Meetup, MeetupSchema } from './schemas/meetup.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meetup.name, schema: MeetupSchema }]),
  ],
  controllers: [MeetupsController],
  providers: [MeetupsService],
})
export class MeetupsModule {}
