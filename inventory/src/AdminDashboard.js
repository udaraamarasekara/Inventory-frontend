import styles from './AdminDashboardAndPManager.module.css';
import AutocompleteSearch from './AutocompleteSearch';
import CustomSelect from './CustomSelect';
import RadioButton from './RadioButton';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function AdminDashboard() {
  const availableProducts=useLoaderData();
  const [name,setName]=useState("All");
  const [screen,setScreen]=useState(window.innerWidth);
  window.onresize = function() {
   setScreen(window.innerWidth)
};

  return (
   <div>
    { screen > 768 ?(
     <div> 
        <AutocompleteSearch url={'search'+name} redirectUrl={'searchResults'}/>
        <div className={styles.RadioButtonsArea}>
          <div className={styles.Quater}>
            <RadioButton   text="All"  setName={setName} name={name}   value="All"/> 
          </div>
          <div className={styles.Quater} >
            <RadioButton   text="Projects"  setName={setName} name={name}   value="Projects"/> 
          </div>
          <div className={styles.Quater} >
            <RadioButton   text="People"  setName={setName} name={name}   value="People"/> 
          </div>
          <div className={styles.Quater} >
            <RadioButton   text="Products"  setName={setName} name={name}   value="Products"/> 
          </div>        
        </div>
     </div> 
      ):
      (
       <div > 
        <CustomSelect setCurrentVal={setName} optionData={['All','Projects','People','Products']} />
        <AutocompleteSearch url={'search'+name}/>
       </div>
      )} 
      <div className={styles.CardsArea}>
        <div className={styles.Card}>
          <h2 className={styles.CardText} >{availableProducts?.success}</h2>
          <h2 className={styles.CardText}  >Available Products</h2>  
        </div>
        <div className={styles.Card}>
          <h2 className={styles.CardText}>Connected People</h2>  
        </div>
        <div className={styles.Card}>
          <h2 className={styles.CardText}>Ongoing Projects</h2>  
        </div>
        <div className={styles.Card}>
          <h2 className={styles.CardText}>Properties</h2>    
        </div>
      </div>
    </div>   
  );
}

export default AdminDashboard;