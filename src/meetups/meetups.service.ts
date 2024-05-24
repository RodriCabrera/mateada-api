import { Injectable } from '@nestjs/common';

@Injectable()
export class MeetupsService {
  constructor() {} // private meetupRepository: Repository<Meetup>, // @InjectRepository(Meetup)

  async findAll() {
    // return this.meetupRepository.find();
  }
}
