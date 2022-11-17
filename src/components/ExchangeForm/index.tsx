import { useState } from "react";
import { toast } from "react-toastify";
import { useTradeContext } from "../../contexts/TradeContext";
import { ICreateTrade } from "../../interfaces/trade";
import { useUserContext } from "../../contexts/UserContext";
import { StyledSection, StyledForm } from "./styles";

const ExchangeForm = () => {
  const [amountInputValue, setAmountInputValue] = useState<string>("");
  const [amountNumber, setAmountNumber] = useState<number>(0);
  const [amountToBuy, setAmountToBuy] = useState<number>(0);
  const [amountToSell, setAmountToSell] = useState<number>(0);
  const [hasErrors, setHasErrors] = useState<boolean>(true);

  const {
    quotation,
    currencies,
    fromCurrency,
    toCurrency,
    setFromCurrency,
    setToCurrency,
    createNewTrade,
  } = useTradeContext();

  const { user } = useUserContext();

  const handleFromSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = (e.target as HTMLSelectElement).value;

    setFromCurrency(selectedValue);
  };

  const handleToSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = (e.target as HTMLSelectElement).value;

    setToCurrency(selectedValue);
  };

  const handleCalculate = (amountInputValue: string) => {
    const amount = Number(amountInputValue);
    setAmountNumber(amount);

    try {
      if (fromCurrency === "select" || toCurrency === "select") {
        throw new Error("Please, select valid currencies.");
      }

      if (fromCurrency === toCurrency) {
        throw new Error("Currencies pairs need to be different.");
      }

      if (isNaN(amount) || amount === 0) {
        throw new Error("Please, insert a valid value.");
      }

      if (fromCurrency === "GBP" && toCurrency === "USD") {
        const buyingRate = Number(quotation.GBPUSD.bid);
        const sellingRate = Number(quotation.GBPUSD.ask);

        setAmountToBuy(buyingRate * amount);
        setAmountToSell(sellingRate * amount);
      }

      if (fromCurrency === "USD" && toCurrency === "GBP") {
        const buyingRate = Number(quotation.USDGBP.bid);
        const sellingRate = Number(quotation.USDGBP.ask);

        setAmountToBuy(buyingRate * amount);
        setAmountToSell(sellingRate * amount);
      }
      setHasErrors(false);
    } catch (error) {
      if (error instanceof Error) {
        toast.warn(error.message);
        setHasErrors(true);
      }
    }
  };

  const handleClickToBuy = async () => {
    const rate = String((amountToBuy / amountNumber).toFixed(4));

    const data: ICreateTrade = {
      fromCurrency: fromCurrency,
      toCurrency: toCurrency,
      inputAmount: amountNumber,
      outputAmount: amountToBuy,
      transactionType: "buy",
      exchangeRate: rate,
      userId: user.id,
    };

    try {
      hasErrors === false && createNewTrade(data);
    } catch (error) {
      console.log(error);
      toast.warn("Trade not made.");
    }
  };

  const handleClickToSell = async () => {
    const rate = String((amountToSell / amountNumber).toFixed(4));

    const data: ICreateTrade = {
      fromCurrency: fromCurrency,
      toCurrency: toCurrency,
      inputAmount: amountNumber,
      outputAmount: amountToSell,
      transactionType: "sell",
      exchangeRate: rate,
      userId: user.id,
    };

    try {
      hasErrors === false && createNewTrade(data);
    } catch (error) {
      console.log(error);
      toast.warn("Trade not made.");
    }
  };

  const priceGBPFormated = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  const priceUSDFormated = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <StyledSection>
      <StyledForm>
        <label>
          From
          <select defaultValue="select" onChange={(e) => handleFromSelect(e)}>
            <option value="select">- Select -</option>
            {currencies.map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          To
          <select defaultValue="select" onChange={(e) => handleToSelect(e)}>
            <option value="select">- Select -</option>
            {currencies.map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          <input
            type="number"
            placeholder="Amount"
            value={amountInputValue}
            min={0}
            onKeyUp={(e) => {
              const value = Number((e.target as HTMLInputElement).value);
              if (value <= 0) {
                (e.target as HTMLInputElement).value = "";
              }
            }}
            onChange={(e) => setAmountInputValue(e.target.value)}
          />
          <button
            type="button"
            onClick={() => handleCalculate(amountInputValue)}
          >
            Calculate
          </button>
        </label>

        <div>
          <div>
            <span>
              {toCurrency === "USD"
                ? priceUSDFormated.format(amountToBuy)
                : priceGBPFormated.format(amountToBuy)}
            </span>
            <button
              type="button"
              onClick={async (e) => {
                e.preventDefault();
                handleCalculate(amountInputValue);
                await handleClickToBuy();
              }}
            >
              Buy
            </button>
          </div>

          <div>
            <span>
              {toCurrency === "USD"
                ? priceUSDFormated.format(amountToSell)
                : priceGBPFormated.format(amountToSell)}
            </span>
            <button
              type="button"
              onClick={async (e) => {
                e.preventDefault();
                handleCalculate(amountInputValue);
                await handleClickToSell();
              }}
            >
              Sell
            </button>
          </div>
        </div>
      </StyledForm>
    </StyledSection>
  );
};

export { ExchangeForm };
