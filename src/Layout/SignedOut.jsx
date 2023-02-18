import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
export default function SignedOut(props) {
  return (
    <div>
        <Menu.Item>
        <Button primary style={{marginRight:"0.5em"}} onClick={props.signIn}>Giris Yap</Button>
      <Button primary>Kayit Ol</Button>
        </Menu.Item>
      
    </div>
  )
}