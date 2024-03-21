import React, { FC } from "react";
import * as S from "./Artists.styled";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { PrimaryColorSpan } from "../../../components/PrimaryColorSpan";
import image7 from "../../../assets/images/image7.webp";
import image8 from "../../../assets/images/image8.webp";
import image9 from "../../../assets/images/image9.webp";
import image10 from "../../../assets/images/image10.webp";
import image11 from "../../../assets/images/image11.webp";
import avatar1 from "../../../assets/images/avatar1.webp";
import avatar2 from "../../../assets/images/avatar2.webp";
import avatar3 from "../../../assets/images/avatar3.webp";
import avatar4 from "../../../assets/images/avatar4.webp";
import avatar5 from "../../../assets/images/avatar5.webp";
import { BoldSpan } from "../../../components/BoldSpan";
import { MobileArtButton } from "../art/Art.styled";

export const Artists: FC = () => {
  return (
    <S.Artists>
      <Container>
        <FlexWrapper justify="space-between" align="flex-end">
          <SectionTitle maxWidth="400px">
            Popular <PrimaryColorSpan>Artists</PrimaryColorSpan> On This Week
          </SectionTitle>
          <S.ArtistsButton>See All</S.ArtistsButton>
        </FlexWrapper>

        <S.GridArtists>
          <S.GridItem>
            <S.GridImg src={image8} alt="#"></S.GridImg>
            <div>
              <img src={avatar1} alt="avatar1"></img>
              <BoldSpan>Osvaldo Percy</BoldSpan>
            </div>
          </S.GridItem>

          <S.GridItem>
            <S.GridImg src={image10} alt="#"></S.GridImg>
            <div>
              <img src={avatar2} alt="avatar2"></img>
              <BoldSpan>Ranson Sqiure</BoldSpan>
            </div>
          </S.GridItem>

          <S.GridItem>
            <S.GridImg src={image7} alt="#"></S.GridImg>
            <div>
              <img src={avatar3} alt="avatar3"></img>
              <BoldSpan>Cristio leo</BoldSpan>
            </div>
          </S.GridItem>

          <S.GridItem>
            <S.GridImg src={image9} alt="#"></S.GridImg>
            <div>
              <img src={avatar4} alt="avatar4"></img>
              <BoldSpan>Sebastian Waltan</BoldSpan>
            </div>
          </S.GridItem>

          <S.GridItem>
            <S.GridImg src={image11} alt="#"></S.GridImg>
            <div>
              <img src={avatar5} alt="avatar5"></img>
              <BoldSpan>Abraham Zack</BoldSpan>
            </div>
          </S.GridItem>
        </S.GridArtists>
        <MobileArtButton>See All</MobileArtButton>
      </Container>
    </S.Artists>
  );
};
