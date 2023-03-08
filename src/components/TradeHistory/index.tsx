import { useTranslation } from "next-i18next";
import { ITradeHistory } from "./interfaces";
import { StyledTradeHistory } from "./styles";

const TradeHistory = ({ tradeHistory }: ITradeHistory) => {
  const { t } = useTranslation();

  const priceGBPFormated = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  const priceUSDFormated = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    tradeHistory && (
      <StyledTradeHistory>
        <ul>
          {tradeHistory.map((trade, index) => {
            return index === 0 ? (
              <>
                <li key={"HEAD"}>
                  <span style={{ fontWeight: "900" }}>{t("pair")}</span>
                  <span style={{ fontWeight: "900" }}>{t("exchangeRate")}</span>
                  <span style={{ fontWeight: "900" }}>
                    {t("exchangedAmount")}
                  </span>
                  <span style={{ fontWeight: "900" }}>
                    {t("receivedAmount")}
                  </span>
                  <span style={{ fontWeight: "900" }}>
                    {t("transactionType")}
                  </span>
                </li>
                <li key={trade.id}>
                  <span>{`${trade.fromCurrency}/${trade.toCurrency}`}</span>
                  <span>{trade.exchangeRate}</span>
                  <span>
                    {trade.toCurrency === "GBP"
                      ? priceUSDFormated.format(trade.inputAmount)
                      : priceGBPFormated.format(trade.inputAmount)}
                  </span>
                  <span>
                    {trade.toCurrency === "USD"
                      ? priceUSDFormated.format(trade.outputAmount)
                      : priceGBPFormated.format(trade.outputAmount)}
                  </span>
                  <span>
                    {trade.transactionType === "buy"
                      ? t("buySpan")
                      : t("sellSpan")}
                  </span>
                </li>
              </>
            ) : (
              <li key={trade.id}>
                <span>{`${trade.fromCurrency}/${trade.toCurrency}`}</span>
                <span>{trade.exchangeRate}</span>
                <span>
                  {trade.toCurrency === "GBP"
                    ? priceUSDFormated.format(trade.inputAmount)
                    : priceGBPFormated.format(trade.inputAmount)}
                </span>
                <span>
                  {trade.toCurrency === "USD"
                    ? priceUSDFormated.format(trade.outputAmount)
                    : priceGBPFormated.format(trade.outputAmount)}
                </span>
                <span>
                  {trade.transactionType === "buy"
                    ? t("buySpan")
                    : t("sellSpan")}
                </span>
              </li>
            );
          })}
        </ul>
      </StyledTradeHistory>
    )
  );
};

export { TradeHistory };
