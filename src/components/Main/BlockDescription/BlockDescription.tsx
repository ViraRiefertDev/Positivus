import { BlockDescriptionContainer, Title, Text } from './styles';
import { BlockDescriptionProps } from './types';

function BlockDescription({title, text,textWidth}:BlockDescriptionProps) {
  return (
    <BlockDescriptionContainer>
      <Title>{title}</Title>
      <Text width={textWidth}>{text}</Text>
    </BlockDescriptionContainer>
  );
}

export default BlockDescription;
