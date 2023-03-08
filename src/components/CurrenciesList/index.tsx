import { StyledCurrenciesList, StyledUl, StyleLi } from "./styles";
import { useTradeContext } from "../../contexts/TradeContext";
import { useTranslation } from "next-i18next";

const CurrenciesList = () => {
  const { quotation, isQuotationLoaded } = useTradeContext();
  const { t } = useTranslation();

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
                  <span>{t("bid")}</span>
                  <span>{Number(singleQuotation.bid).toFixed(4)}</span>
                </div>
                <div>
                  <span>{t("ask")}</span>
                  <span>{Number(singleQuotation.ask).toFixed(4)}</span>
                </div>
              </StyleLi>
            );
          })}
      </StyledUl>
      <p>{t("updatesEveryThirtySeconds")}</p>
    </StyledCurrenciesList>
  );
};

export { CurrenciesList };
