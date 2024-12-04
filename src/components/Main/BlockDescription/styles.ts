import styled from '@emotion/styled';

interface TextProps {
  width: string;
}

export const BlockDescriptionContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 40px;
  margin-bottom: 85px;
`;

export const Title = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 40px;
  line-height: 51px;
  background-color: #b9ff66;
`;

export const Text = styled.p<TextProps>`
  width: ${({ width }) => width};
  font-size: 18px;
  line-height: 23px;
`;
