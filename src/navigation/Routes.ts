export enum Routes {
  Home = "Home",
  CreateAccount = "CreateAccount",

  AccountStack = "Account",
  AccountOverview = "AccountOverview",
  SendCoins = "SendCoins",

  About = "About",

}

export type AccountStackParams = {
  AccountOverview: undefined,
  CreateAccount: undefined,
  SendCoins: undefined,
}