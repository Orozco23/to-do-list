import Title from '../components/Title';
import Button from '../components/Button';
import InputText from '../components/InputText';
import { logIn } from '../fetch/LogIn.fetch';
import { useState } from 'react';
import useStore from '../store/useStore';
import { useNavigate } from 'react-router-dom';


function LogIn() {

  const { updateToken, updateUserEmail } = useStore()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const changeEmail = (e) => setEmail(e.target.value)

  const handleLogin = async () => {
    if (validateEmail()) {
        try {
            let response = await logIn(email)
            updateToken(response.data.token)
            updateUserEmail(email)
            navigate('/to-do')
        } catch (error) {
            console.error('Status', error.status)
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
        event={handleLogin}
      />
    </div>
  )
}

export default LogIn
