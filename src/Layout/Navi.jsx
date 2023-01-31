import React from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
export default function Navi() {
  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
          <Container>
          <Menu.Item
            name='home'
            

          />
          <Menu.Item
            name='messages'
            
           
          />
          <Menu.Item
            name='friends'
            
            
          />
          </Container>
         
        </Menu>
      </Segment>
    </div>
  )
}
