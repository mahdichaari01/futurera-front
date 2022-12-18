import { createContext } from "react";
interface IWalletConnection {
  loggedIn: boolean;
  address: string;
  balance: number;
}
export const defaultContext: IWalletConnection = {
  loggedIn: false,
  address: "0xf3abc3434342jjsd",
  balance: 0.15,
};
export const WalletConnection =
  createContext<IWalletConnection>(defaultContext);
