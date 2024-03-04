import {useState} from 'react'

import {
  MainContainer,
  InnerCont,
  Heading,
  Para,
  Para1,
  Input,
} from './styledComponents'

const PasswordValidator = () => {
  const [userName, ChangeInput] = useState('')

  const changeName = event => ChangeInput(event.target.value)

  return (
    <MainContainer>
      <InnerCont>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" value={userName} onChange={changeName} />
        {userName.length < 8 ? (
          <Para1>Your password must be at least 8 characters</Para1>
        ) : null}
      </InnerCont>
    </MainContainer>
  )
}
export default PasswordValidator
