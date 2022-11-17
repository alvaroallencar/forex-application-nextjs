import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserContext } from "../src/contexts/UserContext";
import { IUserLogin } from "../src/interfaces/user";
import {
  StyledLogin,
  StyledLoginContainer,
} from "../src/styles/pages/login/styles";
import GlobalStyle from "../src/styles/GlobalStyle";

const LoginPage = () => {
  const { handleUserLogin } = useUserContext();
  const router = useRouter();

  const schema = yup.object().shape({
    email: yup.string().required("E-mail required").email("Invalid e-mail"),
    password: yup.string().required("Password required"),
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
            <h4>Login</h4>
            <form action="submit" onSubmit={handleSubmit(handleUserLogin)}>
              <label>Email</label>
              <input
                type="text"
                placeholder="email@mail.com"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>

              <label>Password</label>
              <input
                type="password"
                placeholder="Your password here"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>

              <button type="button" onClick={() => router.push("/register")}>
                Not registered yet?
              </button>

              <button type="submit">Sign in</button>
            </form>
          </StyledLogin>
        </StyledLoginContainer>
      </GlobalStyle>
    </>
  );
};

export default LoginPage;
