import { ButtonProps } from './types';
import { MainButton } from './styles';

function Button({name,type = 'button', onClick,width='264px'}:ButtonProps) {
  return (
    <MainButton width={width} type={type} onClick={onClick}>{name}</MainButton>
  );
}

export default Button;
