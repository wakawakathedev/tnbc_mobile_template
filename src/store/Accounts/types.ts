export type Account = {
  privateKey: string
  publicKey: string
  nickname: string
  balance?: number
}

export type ReduxAccount = {
  publicKey: string
  nickname: string
  balance?: number
}

export type AccountPayload = {
  key: string
  account: Account
}