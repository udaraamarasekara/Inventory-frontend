import './AdminDashboard.css';
import CustomSelect from './CustomSelect';
import RadioButton from './RadioButton';
import {useState } from 'react';

function AdminDashboard() {

  const [name,setName]=useState("All");

  return (
   <div>
    { window.innerWidth > 768 ?(
     <div> 
        <input type="text" placeholder="Search" className="Input"></input>
        <div className="RadioButtonsArea">
          <div className="Quater" >
            <RadioButton   text="All"  setName={setName} name={name}   value="All"/> 
          </div>
          <div className="Quater" >
            <RadioButton   text="Projects"  setName={setName} name={name}   value="Projects"/> 
          </div>
          <div className="Quater" >
            <RadioButton   text="People"  setName={setName} name={name}   value="People"/> 
          </div>
          <div className="Quater" >
            <RadioButton   text="Products"  setName={setName} name={name}   value="Products"/> 
          </div>        
        </div>
     </div> 
      ):
      (
       <div> 
        <CustomSelect setCurrentVal={setName} optionData={['All','Projects','People','Products']} />
        <input type="text" placeholder="Search" className="Input"></input>
       </div>
      )} 
      <div className="CardsArea">
        <div className="Card">
          <h2>Available Products</h2>  
        </div>
        <div className="Card">
          <h2>Connected People</h2>  
        </div>
        <div className="Card">
          <h2>Ongoing Projects</h2>  
        </div>
        <div className="Card">
          <h2>Properties</h2>    
        </div>
      </div>
    </div>   
  );
}

export default AdminDashboard;