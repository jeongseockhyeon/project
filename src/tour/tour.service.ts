import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class TourService {
  constructor(private readonly httpService: HttpService) {}

  async search(keyword: string) {
    const link = 'https://apis.data.go.kr/B551011/KorService1/searchKeyword1';
    const numOfRows = 10;
    const MobileOS = 'ETC';
    const MobileApp = 'project';
    const _type = 'json';
    const serviceKey = process.env.API_KEY;
    const url = `${link}?numOfRows=${numOfRows}&MobileOS=${MobileOS}&MobileApp=${MobileApp}&_type=${_type}&keyword=${keyword}&serviceKey=${serviceKey}`;

    try {
      const result = await this.httpService
        .get(url)
        .pipe(map((response) => response.data));
      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
