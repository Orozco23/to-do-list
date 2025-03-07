import Title from '../components/Title';
import Button from '../components/Button';
import InputText from '../components/InputText';


function LogIn() {

  return (
    <div className='login-card'>
      <Title />
      <InputText 
        type='email'
        placeholder='Email'
        name='email'
        id='email'
      />
      <Button 
        type='submit'
        text='Log In'
        color='secondary-background' 
        name='login'
        id='login'
      />
    </div>
  )
}

export default LogIn
