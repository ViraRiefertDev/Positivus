
import { LogoImgWrapper,LogoImage} from './styles'
import { LogoProps } from './types';

function Logo ({isfooter=false}:LogoProps){
  return (
    <LogoImgWrapper isfooter={isfooter}>
      <LogoImage isfooter={isfooter}/>
    </LogoImgWrapper> 
  )
}

export default Logo;