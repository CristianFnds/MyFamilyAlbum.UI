export interface TokenPayload {
  email: string
  name: string
  userId: number
  exp: number
  sub: string
}

export interface LoginData {
  email: string
  password: string
}
