import Title from '../components/Title';
import Button from '../components/Button';
import InputText from '../components/InputText';


function LogIn() {

  return (
    <div className='login-card'>
      <Title />
      <InputText 
        placeholder = 'Email'
      />
      <Button 
        text = 'Log In'
        color = 'secondary-background' 
      />
    </div>
  )
}

export default LogIn
