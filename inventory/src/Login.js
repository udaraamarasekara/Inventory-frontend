import styles from './Login.module.css';
import Api from './Api';
import { useRef } from 'react';
import {useNavigate } from 'react-router-dom';

function Login() {
const emailInput =useRef('');
const passwordInput= useRef('');
const popupToggle=useRef();
const navigate=useNavigate();
const  loginSubmit = async ()=>{
  const data={
    email:emailInput.current.value,
    password:passwordInput.current.value,
    remember:0 
  }
  
  
      Api.get("sanctum/csrf-cookie").then(() => {
      Api.post('api/login',data).then((res)=>{
        if(res.data.error)
        {
        popupToggle.current.style.display="block";
        setTimeout(()=>popupToggle.current.style.display="none", 1200);
        } 
        else if(res==='Invalid request!')
        {
        localStorage.getItem('auth') && localStorage.removeItem('auth');
        navigate('/login');
        }
        else
        {
        localStorage.setItem('auth',true);
        navigate('/');
        }
      }).catch((e)=>
      {
        popupToggle.current.innerText="Something went Wrong!";
        popupToggle.current.style.display="block";
        setTimeout(()=>popupToggle.current.style.display="none", 1200);
      });
      
    })
  }
 
  ;
  

  return (
    <div className={styles.Page}>
      <div ref={popupToggle} className={styles.Popup}>
        Invalid entry !
      </div>
      <h1 className={styles.Heading} >Login</h1>
      <input ref={emailInput} className={styles.Input} type="text"/>
      <input ref={passwordInput} className={styles.Input} type="text"/>
      <input className={styles.Button} onClick={loginSubmit} type="submit"/>
    </div>
  );
}

export default Login;
