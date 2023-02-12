import styled from "styled-components";

export const StyledProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;

    & > div {
      margin: 0.5rem;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
`;
