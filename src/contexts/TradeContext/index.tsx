import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { tradeApi } from "../../services/tradeApi";
import {
  ITradeProviderProps,
  ICreateTrade,
  IQuotation,
  ITradeProviderData,
  ITrade,
} from "../../interfaces/trade";

export const TradeContext = createContext<ITradeProviderData>(
  {} as ITradeProviderData
);

export const useTradeContext = () => {
  const context = useContext(TradeContext);

  return context;
};

export const TradeProvider = ({
  children,
}: ITradeProviderProps): JSX.Element => {
  const [quotation, setQuotation] = useState<IQuotation>({} as IQuotation);
  const [tradeHistory, setTradeHistory] = useState<ITrade[]>([]);
  const [isQuotationLoaded, setIsQuotationLoaded] = useState<boolean>(false);
  const [currencies, setCurrencies] = useState<string[]>(["GBP", "USD"]);
  const [fromCurrency, setFromCurrency] = useState<string>("select");
  const [toCurrency, setToCurrency] = useState<string>("select");

  const createNewTrade = async (tradeToCreate: ICreateTrade) => {
    try {
      const token = localStorage.getItem("@ForexApp:token");

      if (token) {
        tradeApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        await tradeApi.post("/trades", tradeToCreate);

        toast.success("Trade made successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.warn("An error ocurred and you trade was not made.");
    }
  };

  const getTradeHistory = async (id: string) => {
    try {
      const tradeHistory = await tradeApi.get(`/trades/${id}`);

      setTradeHistory(tradeHistory.data);
    } catch (error) {
      console.error(error);
      toast.warn("Could not fetch your trade history.");
    }
  };

  return (
    <TradeContext.Provider
      value={{
        quotation,
        tradeHistory,
        isQuotationLoaded,
        currencies,
        fromCurrency,
        toCurrency,
        setFromCurrency,
        setToCurrency,
        setCurrencies,
        setQuotation,
        setIsQuotationLoaded,
        createNewTrade,
        getTradeHistory,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};
