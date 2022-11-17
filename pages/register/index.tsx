import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserContext } from "../../src/contexts/UserContext";
import { IUserRegister } from "../../src/interfaces/user";
import { StyledRegister, StyledRegisterContainer } from "../../src/styles/pages/register/styles";
import GlobalStyle from "../../src/styles/GlobalStyle";

const RegisterPage = () => {
  const { handleUserRegister } = useUserContext();
  const router = useRouter();

  const schema = yup.object().shape({
    name: yup.string().required("Name required").min(5, "5 characters minimum"),
    email: yup.string().required("E-mail required").email("Invalid e-mail"),
    password: yup.string().required("Password required"),
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
            <h4>Register</h4>
            <form action="submit" onSubmit={handleSubmit(handleUserRegister)}>
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name here"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>

              <label>Email</label>
              <input
                type="text"
                placeholder="Your best e-mail here"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>

              <label>Password</label>
              <input
                type="password"
                placeholder="A strong password here"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>

              <button type="button" onClick={() => router.push("/")}>
                Already registered? Login here
              </button>

              <button type="submit">Sign up</button>
            </form>
          </StyledRegister>
        </StyledRegisterContainer>
      </GlobalStyle>
    </>
  );
};

export default RegisterPage;
