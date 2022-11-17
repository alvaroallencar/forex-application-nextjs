import styled from "styled-components";

export const StyledCurrenciesList = styled.section`
  width: 100%;
  height: 25rem;
  padding: 1.25rem;

  background-color: rgba(var(--color-purple-dark), 1);
  color: rgba(var(--color-white), 0.8);

  & > p {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const StyledUl = styled.ul`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyleLi = styled.li`
  width: 100%;
  height: 50%;
  padding: 5px;

  background-color: rgba(var(--color-black), 0.6);
  color: rgba(var(--color-white), 0.8);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    width: 100%;
    height: 40%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > span {
      font-size: 1.5rem;
      font-weight: 500;
    }

    & > span + span {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;
