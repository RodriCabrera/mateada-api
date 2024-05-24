import { IsDateString, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateMeetupDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString({ each: true })
  categories: string[];

  @IsDateString()
  date: Date;
}

export class UpdateMeetupDto extends PartialType(CreateMeetupDto) {}
