import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Meetup } from './schemas/meetup.schema';
import { Model } from 'mongoose';
import { CreateMeetupDto } from './dtos/create-meetup.dto';

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

  async update(id: string, updateMeetupDto: CreateMeetupDto): Promise<Meetup> {
    return this.meetupModel
      .findByIdAndUpdate(id, updateMeetupDto, { new: true })
      .exec();
  }
  async delete(id: string): Promise<Meetup> {
    return this.meetupModel.findByIdAndDelete(id).exec();
  }
}
