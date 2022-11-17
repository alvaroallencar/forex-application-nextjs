import styled from "styled-components";

export const StyledRegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(var(--color-grey-3), 1);
`;

export const StyledRegister = styled.div`
  height: 80%;
  max-height: 450px;
  width: 100%;
  max-width: 350px;
  border-radius: 7px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  overflow-y: auto;
  gap: 20px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(var(--color-white), 1);
    border-radius: 0px 8px 8px 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(var(--color-grey-1), 1);
    border-radius: 6px;
    border: 3px solid rgba(var(--color-white), 1);
  }

  background-color: rgba(var(--color-white), 1);
  color: rgba(var(--color-black));

  @media (min-width: 1700px) {
    & {
      max-height: 500px;
      max-width: 450px;
    }
  }

  h4 {
    font-size: 1.25rem;
    align-self: center;
  }

  @media (min-width: 1700px) {
    h4 {
      font-size: 1.5rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;

    input {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      padding: 10px;
      border: solid 1px rgba(var(--color-purple));
    }

    @media (min-width: 1700px) {
      & > input {
        height: 25%;
      }
    }

    span {
      font-size: 0.7rem;
      color: rgba(var(--color-negative-pink));
    }

    & > button {
      background-color: transparent;
      color: rgba(var(--color-grey-1));
      font-weight: 400;
      align-self: center;
      font-family: var(--font-menu-base);
      font-size: 0.88rem;
      cursor: pointer;
      :hover {
        text-decoration: 2px underline;
      }
    }

    & > button + button {
      width: 100%;
      min-height: 3rem;
      margin-top: 10px;
      border-radius: 8px;
      font-size: 1rem;
      font-family: var(--font-forms-base);
      color: rgba(var(--color-text-white));
      background-color: rgba(var(--color-purple));
    }

    @media (min-width: 1700px) {
      & > button + button {
        height: 10vh;
      }
    }
  }
`;
