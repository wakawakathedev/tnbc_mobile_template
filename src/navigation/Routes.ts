export enum Routes {
  Home = "Home",

  AccountStack = "Account",
  AccountOverview = "AccountOverview",

  Camera = "Camera",

  About = "About",
  AboutStack = "AboutStack",
  CreateAccount = "CreateAccount",
  ExportAccount = "ExportAccount",
  ImportAccount = "ImportAccount",
  SendCoins = "SendCoins",


  MoreInfo = "MoreInfo"
}

export type AccountStackParams = {
  AccountOverview: undefined,
  CreateAccount: undefined,
  SendCoins: undefined,
}