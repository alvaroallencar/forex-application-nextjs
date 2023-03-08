/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ReactLoading from "react-loading";
import { useTradeContext } from "../src/contexts/TradeContext";
import { TradeHistory } from "../src/components/TradeHistory";
import { HistoryHeader } from "../src/components/HistoryHeader";
import { useUserContext } from "../src/contexts/UserContext";
import { StyledMain, StyledLoading } from "../src/styles/pages/history/styles";
import GlobalStyle from "../src/styles/GlobalStyle";
import { IGetStaticProps } from "../src/interfaces/staticProps";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }: IGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

const TradeHistoryPage = () => {
  const { tradeHistory, getTradeHistory } = useTradeContext();
  const { user, handleLogout, handleGetUserInfo } = useUserContext();
  const { t } = useTranslation();

  useEffect(() => {
    try {
      handleGetUserInfo();

      const userId = localStorage.getItem("@ForexApp:userId");

      if (userId) {
        getTradeHistory(userId);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {Object.keys(user).length > 0 ? (
        <GlobalStyle>
          <HistoryHeader user={user} handleLogout={handleLogout} />

          <StyledMain>
            <h2>{t("tradeHistory")}</h2>
            <TradeHistory tradeHistory={tradeHistory} />
          </StyledMain>
        </GlobalStyle>
      ) : (
        <StyledLoading>
          <ReactLoading type="spin" color="black" height={64} width={64} />
        </StyledLoading>
      )}
    </>
  );
};

export default TradeHistoryPage;
