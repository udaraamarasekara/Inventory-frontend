import './AdminPortal.css';
import {Link,Outlet,useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
function AdminPortal() {
  let location=useLocation();  

  const [mobileNavShow,setMobileNavShow]=useState(false);
  return (
    <div className="Page">
     {window.innerWidth>=768 && (
        
      <div className="SideNav">
         <div className="ProfilePicture">

         </div>
         <p className="UserName">User name</p>
         <hr className="HR"></hr>
        <div className="NavItemGroup">
           <div className={location.pathname==='/dashboard'? "SelectedNavItem" : "NavItem"}>
              Dashboard 
           </div> 
           <div className={location.pathname==='/projectManager'? "SelectedNavItem" : "NavItem"}>
              Project Manager
           </div> 
           <div className={location.pathname==='/productManager'? "SelectedNavItem" : "NavItem"}>
              Product Manager
            </div> 
            <div className={location.pathname==='/employeeManager'? "SelectedNavItem" : "NavItem"}>
              People Manager
            </div>
        </div>
      </div>)
      }
      <div className="RestPage">
         <div className="NavBar">
            {
             window.innerWidth<768 &&
             (
              <FontAwesomeIcon onClick={()=>setMobileNavShow(!mobileNavShow)} className="MenuIcon" icon={faBars}></FontAwesomeIcon>
             )  
            }
            <Link className="Logout" to="/">Logout</Link>
         </div>
         {
          window.innerWidth < 768 && mobileNavShow &&  
          (
            <div className="MobileNav">
               <div className={location.pathname==='/dashboard'? "SelectedNavItem" : "NavItem"}>
                  Dashboard 
               </div> 
               <div className={location.pathname==='/projectManager'? "SelectedNavItem" : "NavItem"}>
                  Project Manager
               </div> 
               <div className={location.pathname==='/productManager'? "SelectedNavItem" : "NavItem"}>
                  Product Manager
               </div> 
               <div className={location.pathname==='/employeeManager'? "SelectedNavItem" : "NavItem"}>
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
