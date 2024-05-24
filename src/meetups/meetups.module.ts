import { Module } from '@nestjs/common';
import { MeetupsController } from './meetups.controller';
import { MeetupsService } from './meetups.service';
import { Meetup } from './meetup.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MeetupsController],
  providers: [MeetupsService],
  imports: [TypeOrmModule.forFeature([Meetup])],
})
export class MeetupsModule {}
