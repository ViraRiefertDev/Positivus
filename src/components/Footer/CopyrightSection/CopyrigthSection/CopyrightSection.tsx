import TextBlock from "../TextBlock/TextBlock";
import { CopyrightSectionContainer } from "./styles";


function CopyrightSection(){
  return(
    <CopyrightSectionContainer>
      <TextBlock text='© 2023 Positivus. All Rights Reserved.'/>
      <TextBlock text = 'Privacy Policy'/>
    </CopyrightSectionContainer>
  )
}

export default CopyrightSection;