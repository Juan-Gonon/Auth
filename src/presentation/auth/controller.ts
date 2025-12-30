import { Request, Response } from 'express'

export class AuthController {
  // DI

  constructor() {}

  registerUser = (req: Request, res: Response) => {
    res.json('registerUser Controller')
  }

  loginUser = (req: Request, res: Response) => {
    res.json('Login Controller')
  }
}
