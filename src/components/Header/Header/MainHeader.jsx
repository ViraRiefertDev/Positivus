import { MainHeaderContainer } from "./styles";
import Logo from "../../Logo/Logo";
import Navigation from "../Navigation/Navigation";


function Header(){
  return(
    <MainHeaderContainer>
      <Logo/>
      <Navigation/>
    </MainHeaderContainer>
  )
}

export default Header;