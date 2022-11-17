import { StyledCurrenciesList, StyledUl, StyleLi } from "./styles";
import { useTradeContext } from "../../contexts/TradeContext";

const CurrenciesList = () => {
  const { quotation, isQuotationLoaded } = useTradeContext();

  const quotationArray = [quotation.GBPUSD, quotation.USDGBP];

  return (
    <StyledCurrenciesList>
      <StyledUl>
        {isQuotationLoaded &&
          quotationArray.map((singleQuotation) => {
            return (
              <StyleLi key={singleQuotation.name}>
                <span>{`${singleQuotation.code}/${singleQuotation.codein}*`}</span>
                <div>
                  <span>BID</span>
                  <span>{Number(singleQuotation.bid).toFixed(4)}</span>
                </div>
                <div>
                  <span>ASK</span>
                  <span>{Number(singleQuotation.ask).toFixed(4)}</span>
                </div>
              </StyleLi>
            );
          })}
      </StyledUl>
      <p>*Updates every 30 seconds.</p>
    </StyledCurrenciesList>
  );
};

export { CurrenciesList };
