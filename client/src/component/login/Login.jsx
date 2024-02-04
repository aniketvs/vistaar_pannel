import logo from '../../assets/image/logo.png'
import './Login.css'
import GoogleButton from 'react-google-button'
import {useAuth0} from '@auth0/auth0-react' 
import { toast } from 'react-toastify';
function Login() {
  const {loginWithPopup}=useAuth0();
  const handleLogin=async()=>{
    try{
    await loginWithPopup();
    console.log("login");
    toast.success("Login successful!");
    }catch{
      toast.error("Something went wrong");
    }
  }
  return (
  <>
    <div className='login-container'>
      <div className='image-container'><img src={logo} alt={logo} width="100%" height="100%"/></div>
      <p className='login-text'>Login to your account</p>
      <div>
      <GoogleButton
      type='dark'

  onClick={handleLogin}
/>
      </div>
    
    </div>
  </>
  );
}

export default Login;
