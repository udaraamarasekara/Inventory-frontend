import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight,faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from "./SalesAndReceived.module.css";
import CustomSelect from "./CustomSelect";
import React,{useState} from "react";
import { useLoaderData } from "react-router-dom";
function SalesAndReceived(){
  let allData =useLoaderData();
  const [data,setData]=useState(allData.data);
  const [links,setLinks] =useState(allData.links);
  const [meta,setMeta] =useState(allData.meta);
  let k=0;
const [name, setName]=useState('All');
  return(
  <div>
      <div className={styles.SelectionsContainer}>
         <div className={styles.OneThird}>
          <CustomSelect setCurrentVal={setName} optionData={['All transactions','Goods received','Sales']} />
         </div>
         <div className={styles.OneThird} >
           <div className={styles.Pack}>
            <label className={styles.lbl} >From</label>  
            <input className={styles.Input} type="datetime-local"/>
           </div>  
         
         </div>
         <div className={styles.OneThird} >
         <div className={styles.Pack}>
            <label className={styles.lbl}>To</label>  
            <input className={styles.Input} type="datetime-local"/>
           </div> 
         </div>
       </div>
       
      
       <div className={styles.TableContainer}>
         { data ? 
           <table   cellSpacing="0" cellPadding="0" className={styles.TableStyle}>
            <thead>
            <tr>
             {
              Object.keys(data[0]).map((key)=>{
               return(
                
                  <th key={key} className={styles.TableHeader} >
                    {key.replaceAll("_"," ").toUpperCase()}
                  </th>
                );
              })
             }
            </tr>
            </thead>
            <tbody>
            {
             data.map(element => {
              k++;
              return(
              <tr key={k} className={styles.TableRow} >
                {Object.entries(element).map(([key,val])=>{
                 return(<td className={styles.DataCell} key={key} >
                  {val}
                 </td> );
                })}
              </tr>);
             }) 
             
            }
            </tbody>
           </table>:
           <div></div>
         } 

          { links && 
        
        <div>
          <div className={styles.ButtonsContainer}>
            <button className={styles.Button}> 
               1
             </button>
             <div>....</div>
             <button className={styles.Button}> 
              <FontAwesomeIcon   icon={faAngleDoubleLeft}></FontAwesomeIcon>
             </button>
             <div> Showing {meta.current_page } out of {meta.last_page} </div>
             <button className={styles.Button}> 
              <FontAwesomeIcon   icon={faAngleDoubleRight}></FontAwesomeIcon>
             </button>
             <div>....</div>
             <button className={styles.Button}> 
               {meta.last_page}
             </button>
          </div>
       </div>
       }
        </div> 
  </div>);
    
}

export default SalesAndReceived;