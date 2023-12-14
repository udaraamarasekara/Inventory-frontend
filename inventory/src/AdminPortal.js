import styles from './AdminPortal.module.css';
import {Link,Outlet,useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
function AdminPortal() {
  let location=useLocation();  

  const [mobileNavShow,setMobileNavShow]=useState(false);
  return (
    <div className={styles.Page}>
     {window.innerWidth>=768 && (
        
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
             window.innerWidth<768 &&
             (
              <FontAwesomeIcon onClick={()=>setMobileNavShow(!mobileNavShow)} className={styles.MenuIcon} icon={faBars}></FontAwesomeIcon>
             )  
            }
            <Link className={styles.Logout} to="/">Logout</Link>
         </div>
         {
          window.innerWidth < 768 && mobileNavShow &&  
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
