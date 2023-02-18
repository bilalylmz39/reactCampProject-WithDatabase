import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
export default function SignedIn(props) {
  return (
    <div>
    <Menu.Item>
      <Image avatar spaced="right" src="https://media.licdn.com/dms/image/D4D03AQEoA5h7AuoKPg/profile-displayphoto-shrink_800_800/0/1674752912493?e=1681948800&v=beta&t=AHCi0igNe6nrAxnFQ55DNWheVFEhm8l2ndyI0oFSqtI"/>

      <Dropdown pointing="top left" text='YBY'>
        <Dropdown.Menu>
          <Dropdown.Item text="Bilgilerim" icon="info"/>
          <Dropdown.Item onClick={props.signOut} text="Cikis Yap"  icon="sign-out"/>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    </div>
  )
}
