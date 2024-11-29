import { TextBlockWrapper } from './styles';
import {TextBlockProps} from './types'


function TextBlock({text}:TextBlockProps){
  return(
    <TextBlockWrapper>{text}</TextBlockWrapper>
  )
}

export default TextBlock;