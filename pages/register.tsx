import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useUserContext } from "../src/contexts/UserContext";
import { IUserRegister } from "../src/interfaces/user";
import { IGetStaticProps } from "../src/interfaces/staticProps";
import {
  StyledRegister,
  StyledRegisterContainer,
} from "../src/styles/pages/register/styles";
import GlobalStyle from "../src/styles/GlobalStyle";

export const getStaticProps = async ({ locale }: IGetStaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

const RegisterPage = () => {
  const { handleUserRegister } = useUserContext();
  const router = useRouter();
  const { t } = useTranslation();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required(`${t("nameRequired")}`)
      .min(5, `${t("fiveCharactersMinimum")}`),
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
  } = useForm<IUserRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <GlobalStyle>
        <StyledRegisterContainer>
          <StyledRegister>
            <h4>{t("register")}</h4>
            <form action="submit" onSubmit={handleSubmit(handleUserRegister)}>
              <label>{t("name")}</label>
              <input
                type="text"
                placeholder={t("yourNameHere")}
                {...register("name")}
              />
              <span>{errors.name?.message}</span>

              <label>{t("email")}</label>
              <input
                type="text"
                placeholder={t("yourBestEmailHere")}
                {...register("email")}
              />
              <span>{errors.email?.message}</span>

              <label>{t("password")}</label>
              <input
                type="password"
                placeholder={t("aStrongPasswordHere")}
                {...register("password")}
              />
              <span>{errors.password?.message}</span>

              <button type="button" onClick={() => router.push("/")}>
                {t("alreadyRegistered?")}
              </button>

              <button type="submit">{t("signUp")}</button>
            </form>
          </StyledRegister>
        </StyledRegisterContainer>
      </GlobalStyle>
    </>
  );
};

export default RegisterPage;
