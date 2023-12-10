import { Controller, Post, Body, Res, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/users/dto/users.dto';
import { Response, Request } from 'express';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //로그인
  @Post('/login')
  async signIn(@Body() userDto: UserDto, @Res() res: Response): Promise<any> {
    //jwt 쿠키 저장
    const accesstoken = await this.authService.logIn(userDto);
    res.setHeader('Authorization', 'Bearer' + accesstoken);
    res.cookie('jwt', accesstoken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, //하루
    });
    return res.send({ message: 'Login' });
  }
  //로그인 상태
  @Get('/cookies')
  getCookies(@Req() req: Request, @Res() res: Response): any {
    const jwt = req.cookies['jwt'];
    return res.send(jwt);
  }
  //로그아웃
  @Post('/logout')
  async logout(@Req() req: Request, @Res() res: Response): Promise<any> {
    res.cookie('jwt', {
      maxAge: 0,
    });
    return res.send({
      message: 'Logout',
    });
  }
}
