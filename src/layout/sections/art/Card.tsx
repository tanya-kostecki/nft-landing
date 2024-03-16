import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styled/Theme'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Paragraph } from '../../../components/Paragraph';
import { BoldSpan } from '../../../components/BoldSpan';
import { StyledButton } from '../../../components/button/Button';
import { Icon } from "../../../components/icon/Icon";

type CardPropsType = {
    name: string;
    image: string;
}
export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
        <Image src={props.image} alt='card' />
        <FlexWrapper justify='space-between'>
            <Name>{props.name}</Name>
            <FlexWrapper >
                <Icon iconId='ether' width='24px' height='24px' viewBox='0 0 24 24'/>
                <Cost>490ETH</Cost>
            </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper justify='space-between'>
            <div>
                <Ending>Ending In:</Ending>
                <FlexWrapper align='center' gap='5px'>
                    <Icon iconId='clock' width='20px' height='20px' viewBox='0 0 25 25' fill='none'/>
                    <BoldSpan>03:24:56</BoldSpan>
                </FlexWrapper>
            </div>
            <StyledButton backgroundColor={theme.colors.blockBackground} color={theme.colors.primary}>Place A Bid</StyledButton>
        </FlexWrapper>
    </StyledCard>
  )
}

const StyledCard = styled.div`
    padding: 20px;
    border-top: 1px solid ${theme.colors.primary};
    border-radius: 28px;
    background: ${theme.colors.blockBackground};

    max-width: 410px;
    width: 100%;
    flex-grow: 1;
`
const Image = styled.img`
    width: 100%;
    margin-bottom: 23px;
`
const Name = styled.span`
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
    text-align: left;
`
const Cost = styled(Paragraph)`
    font-weight: 700;
`
const Ending = styled.span`
    color: #838382;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
    text-align: left;
`