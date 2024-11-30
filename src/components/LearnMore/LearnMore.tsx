import { LearnMoreWrapper, ArrowWrapper, Arrow, LearnMoreText } from './styles';
import { LearnMoreProps } from './types';


function LearnMore({iswhite=false}:LearnMoreProps){
  return(
    <LearnMoreWrapper>
      <ArrowWrapper>
        <Arrow iswhite={iswhite}/> 
      </ArrowWrapper>
      <LearnMoreText iswhite={iswhite}>Learn more</LearnMoreText>
    </LearnMoreWrapper>
  )
}

export default LearnMore;