import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
export default function SignedIn() {
  return (
    <div>
    <Menu.Item>
      <Image avatar spaced="right" src="ab4.jpg"/>

      <Dropdown pointing="top left" text='YBY'>
        <Dropdown.Menu>
          <Dropdown.Item text="Bilgilerim" icon="info"/>
          <Dropdown.Item text="Cikis Yap" icon="signedOut"/>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    </div>
  )
}
