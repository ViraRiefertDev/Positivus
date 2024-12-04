import {useState } from 'react';
import line from '../../../../assets/images/WPILine.svg';

import {
  ItemContainer,
  TitleContainer,
  ItemNumber,
  Title,
  ToggleContent,
  ImgContainer,
  LineImg,
  Text,
} from './styles';

import { WorkingProcessItemProps } from './types';

function WorkingProcessItem({
  itemNumber,
  title,
  text,
}: WorkingProcessItemProps) {
  const [isShowBlock, setIsShowBlock] = useState<boolean>(false);
  const showResult = (): void => {
    setIsShowBlock(!isShowBlock);
  };
  

  return (
    <ItemContainer onClick={showResult} isShowBlock={isShowBlock.toString()}>
      <TitleContainer>
        <ItemNumber>{itemNumber}</ItemNumber>
        <Title>{title}</Title>
      </TitleContainer>
      {isShowBlock && (
        <ToggleContent
        isShowBlock={isShowBlock.toString()}
      >
          <ImgContainer>
            <LineImg src={line}></LineImg>
          </ImgContainer>
          <Text>{text}</Text>
        </ToggleContent>
      )}
    </ItemContainer>
  );
}

export default WorkingProcessItem;
