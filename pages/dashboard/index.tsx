/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { io } from "socket.io-client";
import { IQuotation } from "../../src/interfaces/trade";
import { useUserContext } from "../../src/contexts/UserContext";
import { useTradeContext } from "../../src/contexts/TradeContext";
import { DashboardHeader } from "../../src/components/DashboardHeader";
import { CurrenciesList } from "../../src/components/CurrenciesList";
import { ExchangeForm } from "../../src/components/ExchangeForm";
import { StyledDashboard } from "../../src/styles/pages/dashboard/styles";
import GlobalStyle from "../../src/styles/GlobalStyle";

const DashboardPage = () => {
  const { user, handleLogout, handleGetUserInfo } = useUserContext();
  const { setQuotation, setIsQuotationLoaded } = useTradeContext();

  useEffect(() => {
    handleGetUserInfo();

    const socket = getQuotation();

    return () => {
      socket.disconnect();
    };
  }, []);

  const getQuotation = () => {
    const socket = io("http://localhost:3333/");

    socket.on("msg", (quotationList: IQuotation) => {
      setQuotation(quotationList);

      setIsQuotationLoaded(true);
    });

    return socket;
  };

  return (
    <>
      {Object.keys(user).length > 0 ? (
        <GlobalStyle>
          <DashboardHeader user={user} handleLogout={handleLogout} />
          <StyledDashboard>
            <CurrenciesList />
            <ExchangeForm />
          </StyledDashboard>
        </GlobalStyle>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default DashboardPage;
