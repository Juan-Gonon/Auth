import { RegisterUserDto } from '../dtos/auth/registeruser.dto'
import { UserEntity } from '../entities/user.entity'

export abstract class AuthDatasoruce {
  // abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>

  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>
}
