import MarketingServices from '../MarketingServices/MarketingServices';
import ServiceCardsContainer from '../ServiceCardsBlock/ServiceCardsContainer/ServiceCardsContainer';
import { MainContainer } from './styles';

function Main() {
  return (
    <MainContainer>
      <MarketingServices/>
      <ServiceCardsContainer/>
    </MainContainer>
  );
}

export default Main;
