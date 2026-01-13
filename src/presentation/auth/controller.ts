import { Request, Response } from 'express'
import { RegisterUserDto } from '../../domain/dtos/auth/registeruser.dto'

export class AuthController {
  // DI

  constructor() {}

  registerUser = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body)

    if (error) return res.status(400).json({ error })

    res.json(registerUserDto)
  }

  loginUser = (req: Request, res: Response) => {
    res.json('Login Controller')
  }
}
