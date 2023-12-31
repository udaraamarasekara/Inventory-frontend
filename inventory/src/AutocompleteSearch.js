import styles from './AutocompleteSearch.module.css';
import Api from './Api';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
function AutocompleteSearch({url,redirectUrl})
{
let time ;
const [suggessions,setSuggessions] =useState([]);
const navigate=useNavigate();
const [sugessionBox,setSuggessionBox]=useState(false);
const viewData=(element)=>{
  navigate('/'+redirectUrl+'/'+element.table+'/'+element.id);

}
const sendToServer= async (e)=>{
  if( e.target.value){  setSuggessionBox(true); 
  await Api.get('api/'+url+'/'+e.target.value).then((res)=>{
  setSuggessions(res.data);
 }).catch((e)=>{
  localStorage.getItem('auth') && localStorage.removeItem('auth');
  navigate('/login');
 })
  }else
  {
    setSuggessionBox(false);
  }
}

 const updateSuggessions =async (e)=>{ 
      time && clearTimeout(time);
      time  = setTimeout(()=>sendToServer(e), 2000);

 }
 return(  
 <div>         
   <input type="text" onKeyUp={updateSuggessions}  placeholder="Search" className={styles.Input}/>
   {
     sugessionBox && 
    <div className={styles.Parent} >         
      <div className={styles.SuggessionArea}>
       {suggessions.map((element,i) => {
         return (<div key={i} className={styles.SuggesionItem} onClick={()=>viewData(element)}>
          {Object.entries(element).filter(([key,value])=>{return  key!=='id' }).map(([j,value])=>{
           return <div key={j}  className={styles.singleDivSuggesion} >{value}</div>;
          })
              
          }
          
        </div>);
       })
       
       }
      </div>
     </div>
     
   }
 </div>
 );
}

export default AutocompleteSearch;