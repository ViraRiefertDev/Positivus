import{NavLinkProps} from './types'
import{Link} from './styles';

function NavLink({name,primary=false}:NavLinkProps){
  return(
    <>
    <Link primary={primary}>{name}</Link>
    </>
  )
}

export default NavLink;