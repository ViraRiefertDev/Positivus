import styled from '@emotion/styled';
import {ReactComponent as Logoimg} from '../../assets/images/logo.svg'



export const LogoImgWrapper = styled.div<{isfooter:boolean}>`
  width: ${({ isfooter }) => (isfooter ? '180px' : '220px')};
`;
export const LogoImage = styled(Logoimg)<{isfooter:string}>`
  color: ${({ isfooter }) => (isfooter==='true' ? 'white' : 'black')};
  width: 100%;
  cursor: pointer;
`;
