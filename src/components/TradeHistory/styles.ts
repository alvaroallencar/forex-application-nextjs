import styled from "styled-components";

export const StyledTradeHistory = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 50px;

  background-color: rgba(var(--color-purple-dark), 1);
  color: rgba(var(--color-white), 0.8);

  & > ul {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    & > li {
      display: flex;
      justify-content: space-between;

      & > span {
        width: 20%;
        text-align: center;
      }
    }
  }
`;
