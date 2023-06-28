import theme from "@/styles/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 100vh;
  background-color: ${theme.colors.gray_500};
  padding: 40px 20px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.gray_50};
  }
`;
