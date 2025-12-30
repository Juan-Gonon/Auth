import { regularExps } from '../../config'

interface UserRegisterI {
  name: string
  email: string
  passowrd: string
}

export class RegisterUserDto implements UserRegisterI {
  name: string
  email: string
  passowrd: string

  constructor(user: UserRegisterI) {
    const { name, email, passowrd } = user
    this.name = name
    this.email = email
    this.passowrd = passowrd
  }

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, passowrd } = object

    if (!name) return ['Missing name']
    if (!email) return ['Missing email']
    if (!regularExps.email.test(email)) return ['Email is not valid']
    if (!passowrd) return ['Missing password']
    if (passowrd < 6) return ['Password too short']

    return [undefined!, new RegisterUserDto({ name, email, passowrd })]
  }
}
