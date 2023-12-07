import './Login.css';
import Api from './Api';
import { useRef } from 'react';


function Login() {

  const email =useRef(null);
const password= useRef(null);
const  loginSubmit = async ()=>{
  const data={
    email:email.current,
    password:password.current,
  }
  const response=async ()=> await Api.post('login',data);
  console.log(response.data);
  
}


  

  return (
    <div className="Page">
      <h1 className="Heading" >Login</h1>
      <input ref={email} className="Input" type="text"/>
      <input ref={password} className="Input" type="text"/>
      <input className="Button" onClick={loginSubmit} type="submit"/>
    </div>
  );
}

export default Login;
