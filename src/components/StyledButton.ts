import styled from "styled-components";
import { theme } from "../styled/Theme";

type StyledButtonProps = {
  backgroundColor?: string;
  height?: string;
  color?: string;
  border?: string;
};
export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.backgroundColor || theme.colors.primary};
  border: ${(props) => props.border || `1px solid ${theme.colors.primary}`};
  border-radius: 8px;
  padding: 12px 40px 12px 40px;
  height: ${(props) => props.height || "100%"};
  color: ${(props) => props.color || theme.colors.blockBackground};
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;

  @media ${theme.media.mobile} {
    padding: 12px 20px 12px 20px;
  }
`;
