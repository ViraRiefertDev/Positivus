import icons from '../../../assets/images/socialIcons.svg'
import { SocialIconsWrapper, SocialIconsImg } from './styles'

function SocialIcons(){
  return(
    <SocialIconsWrapper>
      <SocialIconsImg src={icons} alt="" />
    </SocialIconsWrapper>
  )
}

export default SocialIcons;