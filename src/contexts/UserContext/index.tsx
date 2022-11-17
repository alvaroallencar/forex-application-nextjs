/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { IProviderProps } from "../../interfaces/providers";
import {
  IUserProviderData,
  IUser,
  IUserLogin,
  IUserRegister,
  ILoginResponse,
} from "../../interfaces/user";
import { tradeApi } from "../../services/tradeApi";

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

export const useUserContext = (): IUserProviderData => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }: IProviderProps): JSX.Element => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const router = useRouter();

  const handleGetUserInfo = async () => {
    try {
      const token = localStorage.getItem("@ForexApp:token");
      const id = localStorage.getItem("@ForexApp:userId");

      if (token && id) {
        tradeApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await tradeApi.get<IUser>(`/users/${id}`);

        if (response.status === 200) {
          setUser(response.data);
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserLogin = async (data: IUserLogin) => {
    try {
      const response = await tradeApi.post<ILoginResponse>("/login", data);

      if (response.status === 200) {
        const { token, userId } = response.data;

        localStorage.setItem("@ForexApp:token", token);
        localStorage.setItem("@ForexApp:userId", userId);

        toast.success(`You are now logged in!`);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("User not found.");
      toast.warn(`User not found.`);
    }
  };

  const handleUserRegister = async (registerData: IUserRegister) => {
    try {
      const response = await tradeApi.post<IUser>("/users", registerData);

      if (response.status === 201) {
        toast.success("User registered successfully. Please login.");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.warn("User not registered. Please review your informations.");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.warn("See you soon!");
    router.push("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        // loading,
        // setLoading,
        setUser,
        handleUserLogin,
        handleUserRegister,
        handleGetUserInfo,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
