import styles from './CheckedBox.module.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
function CheckedBox({status,setStatus})
{
 const [checkedBoxStatus,setCheckedBoxStatus]=useState(status);
const changeStatus=()=>{
  setCheckedBoxStatus(!checkedBoxStatus);
  setStatus(!checkedBoxStatus);  
}

  return (
   <div className={styles.container} >
        <div className={styles.square} onClick={changeStatus}>
         {  checkedBoxStatus && <FontAwesomeIcon className={styles.img} icon={faCheck}/>
         }
        </div>
        <div className={styles.text}> Remember me</div>
        
   </div> 
  )
}

export default CheckedBox;