import Logo from "../../Logo/Logo";
import CopyrightSection from "../CopyrightSection/CopyrigthSection/CopyrightSection";
import SocialIcons from "../SocialIcons/SocialIcons";
import { FooterContainer } from "./styles";
function Footer (){
  return(
    <FooterContainer>
      <Logo isfooter/>
      <CopyrightSection/>
      <SocialIcons/>
    </FooterContainer>
  )
}

export default Footer;