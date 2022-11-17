export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  userId: string;
  token: string;
}

export interface IUserRegister {
  email: string;
  name: string;
  password: string;
}

export interface IUserProviderData {
  user: IUser;
  // loading: boolean;
  // setLoading: (boolean: boolean) => void;
  setUser: (user: IUser) => void;
  handleUserLogin: (data: IUserLogin) => void;
  handleUserRegister: (data: IUserRegister) => void;
  handleGetUserInfo: () => void;
  handleLogout: () => void;
}
