import styles from './AdminPortal.module.css';
import {Outlet,useLocation, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { logOut } from './requests';
function AdminPortal() {
  let location=useLocation();  
  const nav = useNavigate();
  const [screen,setScreen]=useState(window.innerWidth);
  window.onresize = function() {
   setScreen(window.innerWidth)
};

  const logoutUser =() =>{
   logOut(); 
   nav('/login'); 
  }

  const [mobileNavShow,setMobileNavShow]=useState(false);
  return (
    <div className={styles.Page}>
     {screen >=768 && (
        
      <div className={styles.SideNav}>
         <div className={styles.ProfilePicture}>

         </div>
         <p className={styles.UserName}>User name</p>
         <hr className={styles.HR}></hr>
        <div className={styles.NavItemGroup}>
           <div className={location.pathname==='/dashboard'? styles.SelectedNavItem : styles.NavItem}>
              Dashboard 
           </div> 
           <div className={location.pathname==='/projectManager'? styles.SelectedNavItem : styles.NavItem}>
              Project Manager
           </div> 
           <div className={location.pathname==='/productManager'? styles.SelectedNavItem : styles.NavItem}>
              Product Manager
            </div> 
            <div className={location.pathname==='/employeeManager'? styles.SelectedNavItem : styles.NavItem}>
              People Manager
            </div>
        </div>
      </div>)
      }
      <div className={styles.RestPage}>
         <div className={styles.NavBar}>
            {
             screen <768 &&
             (
              <FontAwesomeIcon onClick={()=>setMobileNavShow(!mobileNavShow)} className={styles.MenuIcon} icon={faBars}></FontAwesomeIcon>
             )  
            }
            <div className={styles.Logout} onClick={logoutUser}>Logout</div>
         </div>
         {
          screen < 768 && mobileNavShow &&  
          (
            <div className={styles.MobileNav}>
               <div className={location.pathname==='/dashboard'? styles.SelectedNavItem : styles.NavItem}>
                  Dashboard 
               </div> 
               <div className={location.pathname==='/projectManager'? styles.SelectedNavItem : styles.NavItem}>
                  Project Manager
               </div> 
               <div className={location.pathname==='/productManager'? styles.SelectedNavItem : styles.NavItem}>
                  Product Manager
               </div> 
               <div className={location.pathname==='/employeeManager'? styles.SelectedNavItem : styles.NavItem}>
                  People Manager
               </div>
            </div>
          ) 
         }   
         <Outlet/>
      </div>
    </div>
  );
}

export default AdminPortal;
