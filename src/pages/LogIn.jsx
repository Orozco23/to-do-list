import Title from '../components/Title';
import Button from '../components/Button';
import InputText from '../components/InputText';
import { logIn } from '../fetch/LogIn.fetch';
import { useState } from 'react';


function LogIn() {

  const [email, setEmail] = useState('')

  const changeEmail = (e) => setEmail(e.target.value)

  const enter = async () => {
    if (validateEmail()) {
        try {
            let response = await logIn(email)
            console.log(response.data.token)
        } catch (error) {
            console.log('Status', error.status)
        }
    } else {
        console.error('invalid email')
    }
  }

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  return (
    <div className='login-card'>
      <Title />
      <InputText 
        type='email'
        placeholder='Email'
        id='email'
        onChange={changeEmail}
        value={email}
      />
      <Button 
        type='submit'
        text='Log In'
        color='secondary-background' 
        name='login'
        id='login'
        event={enter}
      />
    </div>
  )
}

export default LogIn
