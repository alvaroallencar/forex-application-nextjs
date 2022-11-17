import { IProviderProps } from "../interfaces/providers";
import { TradeProvider } from "./TradeContext";
import { UserProvider } from "./UserContext";

export const ContextProvider = ({ children }: IProviderProps) => {
  return (
    <UserProvider>
      <TradeProvider>{children}</TradeProvider>
    </UserProvider>
  );
};
