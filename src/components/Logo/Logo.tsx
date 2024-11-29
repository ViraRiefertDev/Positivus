
import { LogoImgWrapper,LogoImg} from './styles'
import logo from '../../assets/images/home/logo.svg'

function Logo (){
  return (
    <LogoImgWrapper>
      <LogoImg src={logo}/>
    </LogoImgWrapper> 
  )
}

export default Logo;