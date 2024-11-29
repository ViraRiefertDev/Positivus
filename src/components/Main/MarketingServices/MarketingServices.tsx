import img from '../../../assets/images/MarketingImg.png'
import Button from '../../Button/Button';
import {
  MarketingServicesContainer,
  MarketingServicesTextWrapper,
  Title,
  Text,
  MarketingServicesImgWrapper,
  MarketingServicesImg,
} from './styles';

function MarketingServices() {
  return (
    <MarketingServicesContainer>
      <MarketingServicesTextWrapper>
        <Title>Navigating the digital landscape for success</Title>
        <Text>
        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </Text>
        <Button name='Book a consultation'/>
      </MarketingServicesTextWrapper>
      <MarketingServicesImgWrapper>
        <MarketingServicesImg src={img}/>
      </MarketingServicesImgWrapper>
    </MarketingServicesContainer>
  );
}

export default MarketingServices;
