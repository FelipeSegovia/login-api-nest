import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SignupDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signIn({ email, password: pass }: SigninDto): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    const isPasswordValid = await bcrypt.compare(pass, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async signup(user: SignupDto): Promise<any> {
    const userEncript = {
      ...user,
      password: await bcrypt.hash(user.password, 10),
    };

    return await this.userService.create(userEncript);
  }
}
