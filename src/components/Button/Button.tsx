import { ButtonProps } from './types';
import { MainButton } from './styles';

function Button({name,type = 'button', onClick}:ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick}>{name}</MainButton>
  );
}

export default Button;
