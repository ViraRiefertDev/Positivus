import { ServiceCardProps } from './types';
import {
  ServiceCardContainer,
  ServiceCardText,
  CardTitleWrapper,
  CardTitle,
  CardImageWrapper,
  CardImg,
} from './styles';
import LearnMore from '../../../LearnMore/LearnMore';

function ServiceCard({ text,link, bgColor,textColor, iswhite }:ServiceCardProps) {
  return (
    <ServiceCardContainer bgColor={bgColor}>
      <ServiceCardText>
        <CardTitleWrapper>
          <CardTitle textColor={textColor}>{` ${text} `}</CardTitle>
        </CardTitleWrapper>
        <LearnMore iswhite={iswhite}/>
      </ServiceCardText>
      <CardImageWrapper>
        <CardImg src={link}/>
      </CardImageWrapper>
    </ServiceCardContainer>
  );
}

export default ServiceCard;
