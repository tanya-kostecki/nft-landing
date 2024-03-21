import React, { FC } from "react";
import * as S from "./Footer.styled";
import { Container } from "../../components/Container";
import { Logo } from "../../components/logo/Logo";
import { items } from "../../data/data";
import { FooterItem } from "./footer-item/FooterItem";
import { Icon } from "../../components/icon/Icon";

export const Footer: FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.CopyrightFlexWrapper justify="space-between" wrap="wrap">
          <S.LeftBlock>
            <Logo />
            <S.LeftParagraph>
              Discover NFTs by category, track the latest drop, and and follow
              the collections you love. Enjoy it!
            </S.LeftParagraph>
            <S.Socials>
              <S.SocialLink href="">
                <Icon
                  iconId="facebook"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                />
              </S.SocialLink>
              <S.SocialLink href="">
                <Icon
                  iconId="telegram"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                />
              </S.SocialLink>
              <S.SocialLink href="">
                <Icon
                  iconId="twitter"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                />
              </S.SocialLink>
              <S.SocialLink href="">
                <Icon
                  iconId="linkedIn"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                />
              </S.SocialLink>
            </S.Socials>
          </S.LeftBlock>
          <S.RightBlock>
            {items.map((item) => (
              <FooterItem
                key={item.id}
                title={item.title}
                paragraphs={item.paragraphs}
              />
            ))}
          </S.RightBlock>
        </S.CopyrightFlexWrapper>
        <S.CopyrightFlexWrapper justify="space-between">
          <S.CopyrightSpan as="span">
            © Copyright 2023 - Creativeart
          </S.CopyrightSpan>
          <S.CopyrightWrapper>
            <S.CopyrightLink as="a">Privacy Policy</S.CopyrightLink>
            <S.CopyrightLink as="a">Terms & Conditions</S.CopyrightLink>
          </S.CopyrightWrapper>
        </S.CopyrightFlexWrapper>
      </Container>
    </S.Footer>
  );
};
