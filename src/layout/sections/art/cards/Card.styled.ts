import styled from "styled-components";
import { theme } from "../../../../styled/Theme";
import { Paragraph } from "../../../../components/Paragraph";

export const Card = styled.div`
  padding: 20px;
  border-top: 1px solid ${theme.colors.primary};
  border-radius: 28px;
  background: ${theme.colors.blockBackground};

  max-width: 410px;
  width: 100%;
  flex-grow: 1;
`;
export const Image = styled.img`
  width: 100%;
  margin-bottom: 23px;
`;
export const Name = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;
  text-align: left;
`;
export const Cost = styled(Paragraph)`
  font-weight: 700;
  margin-bottom: 0;
`;
export const Ending = styled.span`
  color: #838382;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
  text-align: left;
`;
