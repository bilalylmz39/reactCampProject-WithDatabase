import React, { Component } from 'react'
import { Container, Menu, Segment,  } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default class Navi extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
  return (
    <div>
      <Segment>
        <Menu inverted >
          <Container>
            <Menu.Item name='home'active={activeItem === 'home'}
          onClick={this.handleItemClick}/>
            <Menu.Item name='messages'active={activeItem === 'messages'}
          onClick={this.handleItemClick}/>
            <Menu.Item name='friends'active={activeItem === 'friends'}
          onClick={this.handleItemClick}/>
            <Menu.Menu position='right'>
              <CartSummary/>
              
              <SignedOut/>
              <SignedIn/>
              
              
            </Menu.Menu>
          </Container>

        </Menu>
        </Segment>
    </div>
  );
}
}
