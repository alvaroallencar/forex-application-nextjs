import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  margin: 0 auto;
  margin-bottom: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(var(--color-purple-dark), 1);
  box-shadow: 0em 0.25em 2em -0.75em rgba(var(--color-black), 1);

  & > div {
    width: 50%;
    height: 5rem;
    max-width: 81.25rem;
    padding-left: 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > h1 {
      font-size: 2rem;
      font-weight: 900;
      color: rgba(var(--color-text-white), 1);
    }
  }

  & > div + div {
    width: 50%;
    height: 5rem;
    max-width: 81.25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h2 {
      width: 40%;
      font-size: 1.2rem;
      font-weight: 600;
      color: rgba(var(--color-text-white), 1);
    }

    & > div {
      width: 60%;
      display: flex;
      justify-content: space-around;

      & > button {
        width: max-content;
        background-color: transparent;
        color: rgba(var(--color-text-white), 1);
        padding: 5px;

        &:hover {
          background-color: rgba(var(--color-black), 0.5);
          color: rgba(var(--color-text-white), 1);
        }
      }
    }
  }
`;
