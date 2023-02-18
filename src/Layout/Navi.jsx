import React, { useState } from 'react'
import { Container, Menu, Segment,  } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navi() {

  const [isAuthenticated, setisAuthenticated] = useState(true)

 function handleSignOut(params) {
  setisAuthenticated(false)

 }
 function handleSignIn(params) {
  setisAuthenticated(true)

 }

  
  return (
    <div>
      
        <Menu inverted fixed='top' >
          <Container>
            <Menu.Item name='home'/>
            <Menu.Item name='messages'/>
            <Menu.Item name='friends'/>
            <Menu.Menu position='right'>
              <CartSummary/>
              {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
              
              
              
              
            </Menu.Menu>
          </Container>

        </Menu>
        
    </div>
  );
}


