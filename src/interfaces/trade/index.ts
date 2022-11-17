import { ReactNode } from "react";
import { IUser } from "../user";

export interface ICreateTrade {
  fromCurrency: string;
  toCurrency: string;
  inputAmount: number;
  outputAmount: number;
  transactionType: string;
  exchangeRate: string;
  userId: string;
}

export interface ITrade {
  id: string;
  fromCurrency: string;
  toCurrency: string;
  inputAmount: number;
  outputAmount: number;
  transactionType: string;
  exchangeRate: string;
  user: IUser;
}

export interface ICurrencyPair {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

export interface IQuotation {
  GBPUSD: ICurrencyPair;
  USDGBP: ICurrencyPair;
}

export interface ITradeProviderData {
  quotation: IQuotation;
  tradeHistory: ITrade[];
  isQuotationLoaded: boolean;
  currencies: string[];
  fromCurrency: string;
  toCurrency: string;
  setIsQuotationLoaded: (boolean: boolean) => void;
  setFromCurrency: (string: string) => void;
  setToCurrency: (string: string) => void;
  setCurrencies: (array: string[]) => void;
  setQuotation: (quotation: IQuotation) => void;
  createNewTrade: (tradeToCreate: ICreateTrade) => void;
  getTradeHistory: (id: string) => void;
}

export interface ITradeProviderProps {
  children: ReactNode;
}
