import { IUser } from "../../interfaces/user";

export interface IHeaderProps {
  user: IUser;
  handleLogout: () => void;
}
