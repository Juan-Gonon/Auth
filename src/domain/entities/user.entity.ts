interface UserI {
  id: string
  name: string
  email: string
  password: string
  role: string[]
  img?: string
}
export class UserEntity implements UserI {
  id: string
  name: string
  email: string
  password: string
  role: string[]
  img?: string
  constructor(user: UserEntity) {
    const { id, name, email, password, role, img = '' } = user

    ;(this.id = id),
      (this.name = name),
      (this.email = email),
      (this.password = password),
      (this.role = role),
      (this.img = img)
  }
}
