import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AdminDashboard.css';
import RadioButton from './RadioButton';
import {useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function AdminProduct() {

  const [name,setName]=useState("All");
  const [SelectActive,setSelectActive]=useState(false);
  const [options,setOptions]=useState("options");


  const toggle=()=>
  {
    if(SelectActive)
    {
      setOptions('fOut');
      window.setTimeout(function () {
        setSelectActive(false);
  
      // do stuff after animation has finished here
  }, 600);
    }else{
      setOptions('options');
      setSelectActive(true);

    }

  }
  return (
   <div>
    <input type="text" placeholder="Search" className="Input"></input>
    { window.innerWidth > 768 ?(
      <div className="RadioButtonsArea">
        <div className="Quater" >
          <RadioButton   text="All time"  setName={setName} name={name}   value="AllTime"/> 
        </div>
        <div className="Quater" >
          <RadioButton   text="This year"  setName={setName} name={name}   value="ThisYear"/> 
        </div>  
        <div className="Quater" >
          <RadioButton   text="This month"  setName={setName} name={name}   value="ThisMonth"/> 
        </div>
        <div className="Quater" >
          <RadioButton   text="This week"  setName={setName} name={name}   value="ThisWeek"/> 
        </div>  
        <div className="Quater" >
          <RadioButton   text="Today"  setName={setName} name={name}   value="Today"/> 
        </div>      
      </div>
      ):
      (
        <div>
          <div className={SelectActive ? 'SelectActive':'Select'} onClick={toggle} >
            <input type="text" readOnly className="Input"></input>
            <FontAwesomeIcon  className={SelectActive ? 'TurnedIcon':'NormalIcon'} icon={faCaretDown}></FontAwesomeIcon>
           
          </div>
          {SelectActive && 
          <div  className={options} >
              <div  className='option'>
              
              </div>
          </div>
          }
          <div>
          </div>  
        </div>
      )} 
      <div className="CardsArea">
        <div className="Card">
          <h2>h5tgt</h2>  
        </div>
        <div className="Card">
          <h2>h5tgt</h2>  
        </div>
        <div className="Card">
          <h2>h5tgt</h2>  
        </div>
        <div className="Card">
          <h2>h5tgt</h2>    
        </div>
      </div>
    </div>   
  );
}

export default AdminProduct;