import { LogoImgWrapper, LogoImage } from './styles';
import { LogoProps } from './types';

function Logo({ isfooter = false }: LogoProps) {
  return (
    <LogoImgWrapper isfooter={isfooter}>
      {/* Приведение булевого значения к строке */}
      <LogoImage isfooter={isfooter.toString()} />
    </LogoImgWrapper>
  );
}

export default Logo;
