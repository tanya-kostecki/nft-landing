import styled from "styled-components";
import { theme } from "../../../../styled/Theme";

export const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.font};

  & + & {
    top: 50%;
    span {
      transform: translateY(-50%);
      display: inline-block;
    }
  }
`;

export const LinkItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 1px;
    background-color: ${theme.colors.font};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(-1px);
      color: ${theme.colors.primary};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-1px);
      }
    }
  }
`;