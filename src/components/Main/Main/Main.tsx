import ContactCTA from '../ContactCTA/ContactCTA';
import MarketingServices from '../MarketingServices/MarketingServices';
import ServiceCardsContainer from '../ServiceCardsBlock/ServiceCardsContainer/ServiceCardsContainer';
import { MainContainer } from './styles';

function Main() {
  return (
    <MainContainer>
      <MarketingServices/>
      <ServiceCardsContainer/>
      <ContactCTA/>
    </MainContainer>
  );
}

export default Main;
