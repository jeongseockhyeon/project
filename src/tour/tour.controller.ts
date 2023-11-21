import { Body, Controller, Get, Param } from '@nestjs/common';
import { TourService } from './tour.service';

@Controller('tour')
export class TourController {
  constructor(private tourService: TourService) {}
  @Get('/search')
  search(@Body('keyword') keyword: string) {
    return this.tourService.search(keyword);
  }
}
