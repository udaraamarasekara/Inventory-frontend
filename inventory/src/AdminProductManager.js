import styles from './AdminDashboardAndPManager.module.css';
import RadioButton from './RadioButton';
import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import {useLoaderData, useNavigate } from 'react-router-dom';

function AdminProductManager() {

  const [name,setName]=useState("AllTime");
  const data =useLoaderData();
  console.log(data);
  const [screen,setScreen]=useState(window.innerWidth);
  window.onresize = function() {
   setScreen(window.innerWidth)
};
  return (
   <div>
    <div className={styles.ButtonsArea}>
      <button className={styles.Button} >Goods</button>
      <button className={styles.Button} >Brands</button>
      <button className={styles.Button} >Modals</button>
      <button className={styles.Button} >Categories</button>

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
          <h2 className={styles.CardText} >{data.spend_for_buy_products} LKR</h2>  
          <h2 className={styles.CardText} >Spend to buy products</h2>  

          <p className={styles.DetailedView}>Detailed view</p>
        </div>
        <div  className={styles.CardP}>
           <h2 className={styles.CardText} >{data.received_from_sale_products} LKR</h2>  
           <h2 className={styles.CardText} >Received by saling products</h2>  
           <p className={styles.DetailedView}>Detailed view</p>

        </div>
        <div  className={styles.CardP}>
           <h2 className={styles.CardText} >{data.promised_to_receive} LKR</h2>  
           <h2 className={styles.CardText} >To be received</h2>  
           <p className={styles.DetailedView}>Detailed view</p>

        </div>
        <div  className={styles.CardP}>
           <h2 className={styles.CardText} >{data.promised_to_pay} LKR</h2>  
           <h2 className={styles.CardText} >Pending payments</h2>  
           <p className={styles.DetailedView}>Detailed view</p>

        </div>
      </div>
    </div>   
  );
}

export default AdminProductManager;