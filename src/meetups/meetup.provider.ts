import { DataSource } from 'typeorm';
import { Meetup } from './meetup.entity';

export const meetupProviders = [
  {
    provide: 'MEETUP_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Meetup),
    inject: ['DATA_SOURCE'],
  },
];
