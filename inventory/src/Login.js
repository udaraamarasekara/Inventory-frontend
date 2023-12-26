import styles from './Login.module.css';
import Api from './Api';
import React,{ useRef, useState } from 'react';
import {useLoaderData, useNavigate } from 'react-router-dom';
import CheckedBox from './CheckedBox';
function Login() {
const emailInput =useRef('');
const passwordInput= useRef('');
const popupToggle=useRef();
const logStatus = useLoaderData();
const [remember,setRemember]=useState(false);
const navigate=useNavigate();
const  loginSubmit = async ()=>{
  const data={
    email:emailInput.current.value,
    password:passwordInput.current.value,
    remember: remember
  }
  
      
      if(logStatus)
      {
        popupToggle.current.innerText="Something went Wrong!";
        popupToggle.current.style.display="block";
        setTimeout(()=>popupToggle.current.style.display="none", 1200);
      }

      Api.get("sanctum/csrf-cookie").then(() => {
      Api.post('api/login',data).then((res)=>{
        if(res.data.error)
        {
        popupToggle.current.style.display="block";
        setTimeout(()=>popupToggle.current.style.display="none", 1200);
        } 
        else if(res==='Invalid request!' || res.data.user==='Invalid Entry' )
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
      <input placeholder="Email" ref={emailInput} className={styles.Input} type="text"/>
      <input placeholder="Password" ref={passwordInput} className={styles.Input} type="text"/>
      <CheckedBox status={remember} setStatus={setRemember} />
      <input className={styles.Button} onClick={loginSubmit} type="submit"/>
    </div>
  );
}

export default Login;
