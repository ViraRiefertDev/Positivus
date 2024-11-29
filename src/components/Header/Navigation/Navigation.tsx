import './styles'
import { NavContainer } from './styles'

import NavLink from '../NavLink/NavLink'

function Navigation(){
  return(
    <NavContainer>
      <NavLink name='About us'/>
      <NavLink name='Services'/>
      <NavLink name='Use Cases'/>
      <NavLink name='Pricing'/>
      <NavLink name='Blog'/>
      <NavLink primary name='Request a quote'/>
    </NavContainer>
  )
}

export default Navigation;