import { useRouter } from "next/router";
import { IHeaderProps } from "./interface";
import { StyledHeader } from "./styles";

const DashboardHeader = ({ user, handleLogout }: IHeaderProps) => {
  const router = useRouter();

  return (
    <StyledHeader>
      <div>
        <h1>Forex Trading</h1>
      </div>
      <div>
        <h2>{user.name.split(" ")[0]}</h2>
        <div>
          <button onClick={() => router.push("/history")}>
            Trade History
          </button>
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      </div>
    </StyledHeader>
  );
};
export { DashboardHeader };
