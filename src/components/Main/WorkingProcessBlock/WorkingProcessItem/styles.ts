import styled from '@emotion/styled';

export const ItemContainer = styled.div<{ isShowBlock: string }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 41px 60px;
  width: 1234px;
  max-height: ${({ isShowBlock }) =>
    isShowBlock === 'false' ? '200px' : '500px'};

  background: ${({ isShowBlock }) =>
    isShowBlock === 'false' ? '#F3F3F3' : '#b9ff66'};
  border: 1px solid #191a23;
  box-shadow: 0px 5px 0px #191a23;
  border-radius: 45px;
  cursor: pointer;
  overflow:hidden;
transition: all 0.5s linear;`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 19px;
  justify-content: start;
  align-items: center;
`;

export const ItemNumber = styled.p`
  font-weight: 500;
  font-size: 60px;
  line-height: 77px;
  margin: 0;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
`;

export const ToggleContent = styled.div<{ isShowBlock: string }>`
  max-height: ${({ isShowBlock }) =>
    isShowBlock === 'true' ? '500px' : '0px'};
  opacity: ${({ isShowBlock }) => (isShowBlock === 'true' ? '1' : '0')}; 
  transition: all 0.5s linear;
`;

export const ImgContainer = styled.div``;

export const LineImg = styled.img``;

export const Text = styled.p`
  font-size: 18px;
  line-height: 23px;
`;
