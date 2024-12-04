import BlockDescription from '../BlockDescription/BlockDescription';
import ContactCTA from '../ContactCTA/ContactCTA';
import MarketingServices from '../MarketingServices/MarketingServices';
import ServiceCardsContainer from '../ServiceCardsBlock/ServiceCardsContainer/ServiceCardsContainer';
import WorkingProcessList from '../WorkingProcessBlock/WorkingProcessList/WorkingProcessList';
import { MainContainer } from './styles';

function Main() {
  return (
    <MainContainer>
      <MarketingServices/>
      <BlockDescription textWidth='580px' title='Services' text='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'/>
      <ServiceCardsContainer/>
      <ContactCTA/>
      <BlockDescription textWidth='292px' title='Our Working Process ' text='Step-by-Step Guide to Achieving Your Business Goals'/>
    <WorkingProcessList/>
    </MainContainer>
  );
}

export default Main;
