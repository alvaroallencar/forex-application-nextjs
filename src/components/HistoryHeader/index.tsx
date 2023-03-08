import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { IHeaderProps } from "./interface";
import { StyledHeader } from "./styles";

const HistoryHeader = ({ user, handleLogout }: IHeaderProps) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <div>
        <h1>{t("forexTrading")}</h1>
      </div>
      <div>
        <h2>{user.name.split(" ")[0]}</h2>
        <div>
          <button onClick={() => router.push("/dashboard")}>
            {t("dashboard")}
          </button>
          <button onClick={() => handleLogout()}>{t("logout")}</button>
        </div>
      </div>
    </StyledHeader>
  );
};
export { HistoryHeader };
