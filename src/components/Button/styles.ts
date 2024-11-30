import styled from '@emotion/styled';

interface MainButtonProps{
  width:string;
}




export const MainButton = styled.button<MainButtonProps>`
padding: 20px 35px;
gap: 10px;
width: ${({width})=>(width)};
height: 68px;
background: #191A23;
border-radius: 14px;
font-size: 20px;
line-height: 28px;
text-align: center;
color: #FFFFFF;
cursor: pointer;
&:hover{
  background-color: #B9FF66;
  color:black; 
}
`;
