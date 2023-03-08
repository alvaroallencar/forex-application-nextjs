import * as yup from "yup";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserContext } from "../src/contexts/UserContext";
import { IGetStaticProps } from "../src/interfaces/staticProps";
import { IUserLogin } from "../src/interfaces/user";
import {
  StyledLogin,
  StyledLoginContainer,
} from "../src/styles/pages/login/styles";
import GlobalStyle from "../src/styles/GlobalStyle";

export const getStaticProps = async ({ locale }: IGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

const LoginPage = () => {
  const { handleUserLogin } = useUserContext();
  const router = useRouter();
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required(`${t("emailRequired")}`)
      .email(`${t("invalidEmail")}`),
    password: yup.string().required(`${t("passwordRequired")}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <GlobalStyle>
        <StyledLoginContainer>
          <StyledLogin>
            <h4>{t("login")}</h4>
            <form action="submit" onSubmit={handleSubmit(handleUserLogin)}>
              <label>{t("email")}</label>
              <input
                type="text"
                placeholder={t("yourEmailHere")}
                {...register("email")}
              />
              <span>{errors.email?.message}</span>

              <label>{t("password")}</label>
              <input
                type="password"
                placeholder={t("passwordPlaceholder")}
                {...register("password")}
              />
              <span>{errors.password?.message}</span>

              <button type="button" onClick={() => router.push("/register")}>
                {t("notRegisteredYet?")}
              </button>

              <button type="submit">{t("signIn")}</button>
            </form>
          </StyledLogin>
        </StyledLoginContainer>
      </GlobalStyle>
    </>
  );
};

export default LoginPage;
