import styled from '@emotion/styled';
import { ReactComponent as Arrowimg } from '../../assets/images/arrow.svg';



export const LearnMoreWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 7px;
  cursor:pointer;
`;

export const ArrowWrapper = styled.div`
  width: 41px;
`;

export const Arrow = styled(Arrowimg)<{iswhite:string}>`
  .circle {
    fill: ${({ iswhite }) => (iswhite==='true' ? '#FFFFFF' : '#191A23')};
  }
  .arrow {
    fill: ${({ iswhite }) => (iswhite==='true' ? '#191A23' : '#B9FF66')};
  }
  
  width: 100%;
`;

export const LearnMoreText = styled.p<{iswhite:boolean}>`
  padding: 0 0 5px 0;
  font-size: 25px;
  line-height: 28px;
  color: ${({iswhite})=>(iswhite? '#fff': '#191A23')};
`;
