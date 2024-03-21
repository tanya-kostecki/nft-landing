import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import image from '../../../assets/images/image1.webp'
import { theme } from '../../../styled/Theme'
import { StyledButton } from '../../../components/button/Button'
import { BoldSpan } from '../../../components/BoldSpan'
import { Icon } from "../../../components/icon/Icon";

export const RightBlock = () => {
  return (
    <StyledRightBlock>
      <Image src={image} alt="main" />
      <IconContainer>
            <Icon iconId='circle' width='170px' height='170px' viewBox='0 0 170 170'/>
        </IconContainer>
      <BidBlock>
        <FlexWrapper justify='space-between' >
          <div>
            <span>Ends in:</span>
            <BoldSpan>05:45:47</BoldSpan>
          </div>
          <div>
            <span>Current Bid:</span>
            <BoldSpan>0.24ETH</BoldSpan>
          </div>
        </FlexWrapper>
        <BidButton>Place A Bid</BidButton>
      </BidBlock>
    </StyledRightBlock>
  );
}

const StyledRightBlock = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 120px; //90px
  position: relative;

  @media screen and (max-width: 1137px) {
    padding-top: 32px;
  }

  @media ${theme.media.tablet} {
    padding-top: 32px;
  }

  @media ${theme.media.mobile} {
    width: 100%;
    padding-left: 0;
    padding-right: 20px;
    display: flex;
    justify-content: center;
  }
`;

const Image = styled.img`
  max-width: 464px;
  max-height: 544px;
  border-radius: 24px;

  @media ${theme.media.mobile} {
    width: 100%;
    padding-left: 29px;
  }
`;

const IconContainer = styled.div`
    position: absolute;
    top: 34%;
    left: 0;

    @media ${theme.media.tablet} {
      display: none;
    }
`
const BidBlock = styled.div`
  border-top: 1px solid ${theme.colors.primary};
  border-radius: 16px;
  box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
  background: ${theme.colors.blockBackground};
  padding: 20px;

  position: absolute;
  /* top: 75%; */
  bottom: 6%;
  right: 0;
  width: 304px;

  span {
    display: block;
    line-height: 27px;
  }

  span:first-child {
    color: ${theme.colors.primary};
  }

  @media ${theme.media.mobile} {
    /* width: 224px; */
    width: 60vw;
  }
`;
const BidButton = styled(StyledButton)`
    width: 100%;
    margin-top: 24px;
`
