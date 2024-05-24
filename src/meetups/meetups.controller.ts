import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MeetupsService } from './meetups.service';
import { CreateMeetupDto, UpdateMeetupDto } from './meetup.dto';

@Controller('meetups')
export class MeetupsController {
  constructor(private readonly meetupsService: MeetupsService) {}

  @Post()
  create(@Body() createMeetupDto: CreateMeetupDto) {
    return this.meetupsService.create(createMeetupDto);
  }

  @Get()
  async findAll() {
    return this.meetupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meetupsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMeetupDto: UpdateMeetupDto) {
    return this.meetupsService.update(id, updateMeetupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetupsService.delete(id);
  }
}
