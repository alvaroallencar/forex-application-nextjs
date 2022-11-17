import { ITradeHistory } from "./interfaces";
import { StyledTradeHistory } from "./styles";

const TradeHistory = ({ tradeHistory }: ITradeHistory) => {
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
                  <span style={{ fontWeight: "900" }}>Pair</span>
                  <span style={{ fontWeight: "900" }}>Exchange rate</span>
                  <span style={{ fontWeight: "900" }}>Exchanged amount</span>
                  <span style={{ fontWeight: "900" }}>Received amount</span>
                  <span style={{ fontWeight: "900" }}>Transaction type</span>
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
                  <span>{trade.transactionType}</span>
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
                <span>{trade.transactionType}</span>
              </li>
            );
          })}
        </ul>
      </StyledTradeHistory>
    )
  );
};

export { TradeHistory };
