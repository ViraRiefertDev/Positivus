import ServiceCard from '../ServiceCard/ServiceCard';
import { CardsContainer } from './styles';
import { ImageLinks } from './links';
import { Colors } from '../../Main/colors';

function ServiceCardsContainer() {
  return (
    <CardsContainer>
      <ServiceCard
        text='Search engine optimization'
        link={ImageLinks.Search}
        bgColor={Colors.Gray}
        textColor={Colors.Green}
      />
      <ServiceCard
        text='Pay-per-click advertising'
        link={ImageLinks.PayPerClick}
        bgColor={Colors.Green}
        textColor={Colors.White}
      />
      <ServiceCard
        text='Social MediaMarketing'
        link={ImageLinks.SocialMedia}
        bgColor={Colors.Black}
        textColor={Colors.White}
        iswhite={true}
      />
      <ServiceCard
        text='Email Marketing'
        link={ImageLinks.EmailMarketing}
        bgColor={Colors.White}
        textColor={Colors.Green}
      />
      <ServiceCard
        text='Content Creation'
        link={ImageLinks.ContentCreation}
        bgColor={Colors.Green}
        textColor={Colors.White}
      />
      <ServiceCard
        text='Analytics and Tracking'
        link={ImageLinks.Analytics}
        bgColor={Colors.Black}
        textColor={Colors.Green}
        iswhite={true}
      />
    </CardsContainer>
  );
}

export default ServiceCardsContainer;
