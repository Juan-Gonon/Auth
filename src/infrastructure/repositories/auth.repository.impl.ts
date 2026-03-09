import { AuthDatasoruce } from '../../domain/datasources/auth.datasource'
import { RegisterUserDto } from '../../domain/dtos/auth/registeruser.dto'
import { UserEntity } from '../../domain/entities/user.entity'
import { AuthRepository } from '../../domain/repositories/auth.repository'

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDatasource: AuthDatasoruce) {}
  register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    return this.authDatasource.register(registerUserDto)
  }
}
