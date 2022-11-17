/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useTradeContext } from "../../src/contexts/TradeContext";
import { TradeHistory } from "../../src/components/TradeHistory";
import { HistoryHeader } from "../../src/components/HistoryHeader";
import { useUserContext } from "../../src/contexts/UserContext";
import { StyledMain } from "../../src/styles/pages/history/styles";
import GlobalStyle from "../../src/styles/GlobalStyle";

const TradeHistoryPage = () => {
  const { tradeHistory, getTradeHistory } = useTradeContext();
  const { user, handleLogout, handleGetUserInfo } = useUserContext();

  useEffect(() => {
    handleGetUserInfo();

    getTradeHistory(user.id);
  }, []);

  return (
    <>
      {Object.keys(user).length > 0 ? (
        <GlobalStyle>
          <HistoryHeader user={user} handleLogout={handleLogout} />

          <StyledMain>
            <h2>Trade History</h2>

            {tradeHistory.length > 0 ? (
              <TradeHistory tradeHistory={tradeHistory} />
            ) : (
              <p>Loading...</p>
            )}
          </StyledMain>
        </GlobalStyle>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default TradeHistoryPage;
