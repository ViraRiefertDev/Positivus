import styled from '@emotion/styled';

interface LinkStyleProps {
  primary:boolean;
}

export const Link = styled.a<LinkStyleProps>`
  font-size:20px;
  line-height:28px;
  border:${({primary})=>(primary? '1px solid black':'0px')};
  border-radius:${({primary})=>(primary? '8px':'0px')};
  padding:${({primary})=>(primary?'20px 35px':'0px')};
  cursor: pointer;
  &:hover{
    color:#898989;
  }
`