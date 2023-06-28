import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;

  > section {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 1.875rem;
  }
`;
