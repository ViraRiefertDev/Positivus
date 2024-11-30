import Button from '../../Button/Button';
import contactImg from '../../../assets/images/contactBlockImg.svg';
import {
  ContactCTAContainer,
  ContactTextBlock,
  ContactTitle,
  ContactText,
  ImgWrapper,
  Image,
} from './styles';

function ContactCTA() {
  return (
    <ContactCTAContainer>
      <ContactTextBlock>
        <ContactTitle>Let’s make things happen</ContactTitle>
        <ContactText>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</ContactText>
        <Button width='288px' name='Get your free proposal' />
      </ContactTextBlock>
      <ImgWrapper>
        <Image src={contactImg}></Image>
      </ImgWrapper>
    </ContactCTAContainer>
  );
}

export default ContactCTA;
