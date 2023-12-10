import { Body, Controller, Post} from '@nestjs/common';
import { TourService } from './tour.service';

@Controller('tour')
export class TourController {
  constructor(private tourService: TourService) {}
  @Post('/search')
  search(@Body('keyword') keyword: string) {
    return this.tourService.search(keyword);
  }
}
