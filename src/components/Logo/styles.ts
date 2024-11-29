import styled from '@emotion/styled';
import {ReactComponent as Logoimg} from '../../assets/images/logo.svg'

export interface LogoImgWrapperProps {
  isfooter: boolean;
}

export const LogoImgWrapper = styled.div<LogoImgWrapperProps>`
  width: ${({ isfooter }) => (isfooter ? '180px' : '220px')};
`;
export const LogoImage = styled(Logoimg)<LogoImgWrapperProps>`
  color: ${({ isfooter }) => (isfooter ? 'white' : 'black')};
  width: 100%;
  cursor: pointer;
`;
