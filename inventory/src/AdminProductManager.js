import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './AdminDashboard.module.css';
import RadioButton from './RadioButton';
import {useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function AdminProduct() {

  const [name,setName]=useState("All");
  const [SelectActive,setSelectActive]=useState(false);
  const [options,setOptions]=useState(styles.options);


  const toggle=()=>
  {
    if(SelectActive)
    {
      setOptions(styles.fOut);
      window.setTimeout(function () {
        setSelectActive(false);
  
      // do stuff after animation has finished here
  }, 600);
    }else{
      setOptions(styles.options);
      setSelectActive(true);

    }

  }
  return (
   <div>
    <input type="text" placeholder="Search" className={styles.Input}></input>
    { window.innerWidth > 768 ?(
      <div className={styles.RadioButtonsArea}>
        <div className={styles.Quater} >
          <RadioButton   text="All time"  setName={setName} name={name}   value="AllTime"/> 
        </div>
        <div className={styles.Quater}>
          <RadioButton   text="This year"  setName={setName} name={name}   value="ThisYear"/> 
        </div>  
        <div className={styles.Quater}>
          <RadioButton   text="This month"  setName={setName} name={name}   value="ThisMonth"/> 
        </div>
        <div className={styles.Quater} >
          <RadioButton   text="This week"  setName={setName} name={name}   value="ThisWeek"/> 
        </div>  
        <div className={styles.Quater}>
          <RadioButton   text="Today"  setName={setName} name={name}   value="Today"/> 
        </div>      
      </div>
      ):
      (
        <div>
          <div className={SelectActive ? styles.SelectActive:styles.Select} onClick={toggle} >
            <input type="text" readOnly className={styles.Input}></input>
            <FontAwesomeIcon  className={SelectActive ? styles.TurnedIcon:styles.NormalIcon} icon={faCaretDown}></FontAwesomeIcon>
           
          </div>
          {SelectActive && 
          <div  className={options} >
              <div  className={styles.option}>
              
              </div>
          </div>
          }
          <div>
          </div>  
        </div>
      )} 
      <div className={styles.CardsArea}>
        <div className={styles.Card}>
          <h2>h5tgt</h2>  
        </div>
        <div  className={styles.Card}>
          <h2>h5tgt</h2>  
        </div>
        <div  className={styles.Card}>
          <h2>h5tgt</h2>  
        </div>
        <div  className={styles.Card}>
          <h2>h5tgt</h2>    
        </div>
      </div>
    </div>   
  );
}

export default AdminProduct;