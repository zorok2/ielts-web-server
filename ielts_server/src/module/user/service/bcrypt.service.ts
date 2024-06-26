import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
@Injectable()
export class BCryptService {
  async hashPassWord(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);
    return hashedPassword;
  }

  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const isPassWordMatching = await compare(password, hashedPassword);
    return isPassWordMatching;
  }
}
