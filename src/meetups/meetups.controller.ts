import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { MeetupsService } from './meetups.service';
import { CreateMeetupDto } from './dtos/create-meetup.dto';

@Controller('meetups')
export class MeetupsController {
  constructor(private readonly meetupsService: MeetupsService) {}

  // @Post()
  // create(@Body() createMeetupDto: CreateMeetupDto) {
  //   return this.meetupsService.create(createMeetupDto);
  // }

  @Get()
  async findAll() {
    // return this.meetupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Finding a meetup with id: ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMeetupDto: CreateMeetupDto) {
    return `Updating a meetup with id: ${id} to have title: ${updateMeetupDto.title}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Deleting a meetup with id: ${id}`;
  }
}
