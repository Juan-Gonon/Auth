import { regularExps } from '../../../config'

export class RegisterUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, passowrd } = object

    if (!name) return ['Missing name']
    if (!email) return ['Missing email']
    if (!regularExps.email.test(email)) return ['Email is not valid']
    if (!passowrd) return ['Missing password']
    if (passowrd.length < 6) return ['Password to short']

    return [, new RegisterUserDto(name, email, passowrd)]
  }
}
