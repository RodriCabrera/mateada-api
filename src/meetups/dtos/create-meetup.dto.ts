import { IsDateString, IsString } from 'class-validator';

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
