import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Meetup } from './meetup.entity';

@Injectable()
export class MeetupsService {
  constructor(
    @InjectRepository(Meetup)
    private meetupRepository: Repository<Meetup>,
  ) {}

  async findAll(): Promise<Meetup[]> {
    return this.meetupRepository.find();
  }
}
