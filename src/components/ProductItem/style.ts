import styled from "styled-components";
// Componente da carta de um item de um produto
export const StyledProductItem = styled.div`
  width: 12rem;
  height: 15rem;
  background-color: #1f1d2b;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  text-align: center;
  padding: 0 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 50%;
    height: 50%;
    border-radius: 0.5rem;
  }
  h2 {
    color: #fec101;
  }
`;
