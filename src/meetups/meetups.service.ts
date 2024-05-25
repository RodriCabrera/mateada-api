import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meetup } from './schemas/meetup.schema';
import { CreateMeetupDto, UpdateMeetupDto } from './meetup.dto';

@Injectable()
export class MeetupsService {
  constructor(@InjectModel(Meetup.name) private meetupModel: Model<Meetup>) {}

  async create(createMeetupDto: CreateMeetupDto) {
    const createdMeetup = new this.meetupModel(createMeetupDto);
    return createdMeetup.save();
  }

  async findAll(): Promise<Meetup[]> {
    return this.meetupModel.find().exec();
  }

  async findOne(id: string): Promise<Meetup> {
    return this.meetupModel.findById(id).exec();
  }

  async update(id: string, updateMeetupDto: UpdateMeetupDto): Promise<Meetup> {
    return this.meetupModel
      .findByIdAndUpdate(id, updateMeetupDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Meetup> {
    return this.meetupModel.findByIdAndDelete(id).exec();
  }
}
