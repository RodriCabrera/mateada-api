import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MeetupsService } from './meetups.service';
import { CreateMeetupDto, UpdateMeetupDto } from './meetup.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/public.decorator';

@ApiTags('Meetups')
@Controller('meetups')
export class MeetupsController {
  constructor(private readonly meetupsService: MeetupsService) {}

  @Post()
  create(@Body() createMeetupDto: CreateMeetupDto) {
    return this.meetupsService.create(createMeetupDto);
  }

  @Public()
  @Get()
  async findAll() {
    return this.meetupsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.meetupsService.findOne(id);
    } catch (error) {
      throw new NotFoundException('Meetup not found');
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMeetupDto: UpdateMeetupDto) {
    try {
      return this.meetupsService.update(id, updateMeetupDto);
    } catch (error) {
      throw new NotFoundException('Meetup not found');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.meetupsService
      .delete(id)
      .then((res) => res)
      .catch(() => {
        throw new NotFoundException('Meetup not found');
      });
  }
}
