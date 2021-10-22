export type Account = {
  publicKey: string
  privateKey: string
  nickname: string
  balance?: number
}

export type AccountPayload = {
  key: string
  account: Account
}