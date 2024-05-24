import { Module } from '@nestjs/common';
import { MeetupsModule } from './meetups/meetups.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_CONFIG } from './database/constants';
import { DataSource } from 'typeorm';

@Module({
  imports: [MeetupsModule, TypeOrmModule.forRoot(DATABASE_CONFIG)],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
