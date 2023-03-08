import styled from "styled-components";

export const StyledDashboard = styled.main`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  /* width: 95%; */

  display: flex;
  justify-content: space-between;

  & > section {
    width: 50%;
  }
`;

export const StyledLoading = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;
