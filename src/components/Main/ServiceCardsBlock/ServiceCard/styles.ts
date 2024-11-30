import styled from '@emotion/styled';
import { Colors } from '../../Main/colors';

interface ServiceCardContainerProps {
  bgColor: Colors;
}

interface CardTitleProps {
  textColor: Colors;
}

export const ServiceCardContainer = styled.div<ServiceCardContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 69px;
  width: 580px;
  padding: 30px;
  background-color: ${({ bgColor }) => `${bgColor}`};
  border: 1px solid black;
  border-radius: 30px;
`;
export const ServiceCardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 93px;
  width: 197px;
`;
export const CardTitleWrapper = styled.p``;
export const CardTitle = styled.span<CardTitleProps>`
  padding:0 5px; 
  box-decoration-break: clone;
  background-color: ${({ textColor }) => `${textColor}`};
  border-radius: 10px;
  font-weight: 700;
  font-size: 25px;
  line-height: 32px;
  color: #000000;
`;
export const CardImageWrapper = styled.div`
  width: 210px;
`;
export const CardImg = styled.img`
  width: 100%;
`;
