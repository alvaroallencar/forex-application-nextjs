import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 25rem;
  padding: 1.25rem;

  background-color: rgba(var(--color-purple-dark), 1);
  color: rgba(var(--color-white), 0.8);
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > label {
    width: 100%;
    height: 20%;
    padding: 1.25rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(var(--color-black), 0.6);
    color: rgba(var(--color-white), 0.8);

    & > input {
      width: 50%;
      height: 1.875rem;
      padding: 5px;

      font-family: var(--font-base);
      font-weight: 600;
      
      background-color: rgba(var(--color-white), 0.9);
      color: rgba(var(--color-black), 1);
    }

    & > select {
      width: 6.375rem;
      height: 1.875rem;
      padding: 5px;

      font-family: var(--font-base);
      font-weight: 600;

      background-color: rgba(var(--color-white), 0.9);
      color: rgba(var(--color-black), 1);
    }

    & > button {
      width: 6.375rem;
      height: 1.875rem;
      padding: 5px;

      font-family: var(--font-base);
      font-weight: 600;

      background-color: rgba(var(--color-white), 0.9);
      color: rgba(var(--color-black), 1);
    }
  }

  & > div {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;

    background-color: rgba(var(--color-black), 0.6);
    color: rgba(var(--color-white), 0.8);

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      & > button {
        width: 6.375rem;
        height: 1.875rem;
        padding: 5px;

        font-weight: 600;

        background-color: rgba(var(--color-success-green), 0.8);
        color: rgba(var(--color-white), 1);
      }
    }

    & > div + div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      & > button {
        width: 6.375rem;
        height: 1.875rem;
        padding: 5px;

        font-weight: 600;

        background-color: rgba(var(--color-negative-pink), 0.8);
        color: rgba(var(--color-white), 1);
      }
    }
  }
`;
