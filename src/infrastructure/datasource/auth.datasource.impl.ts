import { AuthDatasoruce } from '../../domain/datasources/auth.datasource'
import { RegisterUserDto } from '../../domain/dtos/auth/registeruser.dto'
import { UserEntity } from '../../domain/entities/user.entity'
import { CustomError } from '../../domain/errors/custom.error'

export class DataSourceImpl implements AuthDatasoruce {
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto
    try {
      // if ('juan@microsoft.com' === email)
      //   throw CustomError.badRequest('El correo ya existe')

      return new UserEntity({
        id: '1',
        name,
        email,
        password,
        role: ['Admin'],
      })
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }
}
