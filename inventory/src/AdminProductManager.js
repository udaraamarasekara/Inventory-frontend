import styles from './AdminDashboardAndPManager.module.css';
import RadioButton from './RadioButton';
import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
function AdminProductManager() {

  const [name,setName]=useState("AllTime");
  const [screen,setScreen]=useState(window.innerWidth);
  window.onresize = function() {
   setScreen(window.innerWidth)
};
  return (
   <div>
    <div className={styles.ButtonsArea}>
      <button className={styles.Button} >f</button>
    </div>
    { screen > 768 ?(
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
        <CustomSelect setCurrentVal={setName} optionData={['All','Projects','People','Products']} />

      )} 
      <div className={styles.CardsArea}>
        <div className={styles.CardP}>
          <h2 className={styles.CardText} >h5tgt</h2>  
          <h2 className={styles.CardText} >h5tgt</h2>  

          <p className={styles.DetailedView}>Detailed view</p>
        </div>
        <div  className={styles.CardP}>
           <h2 className={styles.CardText} >h5tgt</h2>  
           <h2 className={styles.CardText} >h5tgt</h2>  
           <p className={styles.DetailedView}>Detailed view</p>

        </div>
        <div  className={styles.CardP}>
           <h2 className={styles.CardText} >h5tgt</h2>  
           <h2 className={styles.CardText} >h5tgt</h2>  
           <p className={styles.DetailedView}>Detailed view</p>

        </div>
        <div  className={styles.CardP}>
           <h2 className={styles.CardText} >h5tgt</h2>  
           <h2 className={styles.CardText} >h5tgt</h2>  
           <p className={styles.DetailedView}>Detailed view</p>

        </div>
      </div>
    </div>   
  );
}

export default AdminProductManager;