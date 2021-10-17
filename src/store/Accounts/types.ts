export type Account = {
  publicKey: string
  privateKey: string
  nickname: string
}

export type AccountPayload = {
  key: string
  account: Account
}