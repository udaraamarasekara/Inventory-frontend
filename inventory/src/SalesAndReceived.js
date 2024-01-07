import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight,faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from "./SalesAndReceived.module.css";
import CustomSelect from "./CustomSelect";
import React,{useRef, useState} from "react";
import { useLoaderData } from "react-router-dom";
import  * as All  from './requests';   
import Loading from './Loading'; 
function SalesAndReceived(){
  
  let allData=useRef(useLoaderData());
  const [data,setData]=useState(allData.current.data);
  const [links,setLinks] =useState(allData.current.links);
  const [meta,setMeta] =useState(allData.current.meta);
  const [load,setLoad]=useState(false);
  const [checkStatus,setCheckStatus]=useState(false);
  const [toState,setToState]=useState(false);
  const [fromState,setFromState]=useState(false);
  const [searchType,setSearchType]=useState("All transactions");
  const from =useRef();
  const to= useRef();
  const search= useRef('allGoods');

  let k=0;

   const fromChange=()=>{
    if(fromState && from.current.value)
    {
      setFromState(false);
    }
  }

  const toChange=()=>{
    if(toState && to.current.value)
    {
      setToState(false);
    }
  }

  const filterData=async()=>{
    setLoad(true);

    if(checkStatus){
      if(from.current.value)
      {
        if(to.current.value){
           if(searchType==='All transactions')
           {
             allData.current= await All.allGoodsWithTime(from.current.value,to.current.value); 
             search.current='allGoodsWithTime';
           }
           else if(searchType==='Sales')
           {
            allData.current= await All.allSales(from.current.value,to.current.value); 
            search.current='allSales';
           }
           else
           {
            allData.current= await All.allGrns(from.current.value,to.current.value); 
            search.current='allGrns';
           } 
        }
        else{
          setToState(true);

        }
      }
      else{
        setFromState(true);
      }
   
    }
    else{
      if(searchType!=='All transactions')
      {
       if(searchType==='Sales'){
          search.current='allTimeSales';
          allData.current= await All.allTimeSales();
       }else{
        search.current='allTimeGrns';
        allData.current= await All.allTimeGrns();
       }
     
      }
   
    }
    setData(allData.current.data);
    setLinks(allData.current.links);
    setMeta(allData.current.meta);
    setLoad(false);

  }

  const shiftQuery=async (argument)=>{
    setLoad(true);
   let tmpLink=links.next;
    if(argument==='next' && meta.current_page!==meta.last_page)
    {
      tmpLink='?page='+ parseInt(parseInt(meta.current_page)+1);

    }else if(argument==='prev' && meta.current_page!=='1')
    {
      tmpLink='?page='+ parseInt(parseInt(meta.current_page)-1);

    }else if(argument==='first')
    {
      tmpLink='?page=1';

    }
    else if(argument==='last')
    {
      tmpLink='?page='+meta.last_page;
    }
     if(tmpLink){
      if(search.current==='allGoods')
      {
      allData.current= await All.allGoodsPaginate(tmpLink);
      }else if(search.current==='allTimeGrns')
      {
        allData.current= await All.allTimeGrnsPaginate(tmpLink);
      }else if(search.current==='allTimeSales')
      {
        allData.current= await All.allTimeSalesPaginate(tmpLink);
      }else if(search.current==='allSales')
      {
        allData.current= await All.allSalesPaginate(tmpLink,from.current.value,to.current.value);
      }
      else if(search.current==='allGrns')
      {
        allData.current= await All.allGrnsPaginate(tmpLink,from.current.value,to.current.value);
      }
      else if(search.current==='allGoodsWithTime' ){
        allData.current= await All.allGoodsWithTimePaginate(tmpLink,from.current.value,to.current.value);
      }
  
     }
     setData(allData.current.data);
     setLinks(allData.current.links);
     setMeta(allData.current.meta);
     setLoad(false);
 }

  return(
  <div>
        <div className={styles.CheckedBox}>
            <label>Custom period</label>          
            <input type='checkbox' onChange={()=>setCheckStatus(!checkStatus)} checked={checkStatus}></input>
         </div>    
      <div className={styles.SelectionsContainer}>
         <div className={styles.OneThird}>
          <CustomSelect setCurrentVal={setSearchType} optionData={['All transactions','Goods received','Sales']} />
         </div>
        {checkStatus && <>
         <div className={styles.OneThird} >
           <div className={styles.Pack}>
            <label className={styles.lbl} >From</label>  
            <div>
              <input ref={from} onChange={fromChange} className={styles.Input} type="datetime-local"/>
               {fromState &&
              <label className={styles.ErrorLbl} >Fill this field</label>  
               }
            </div>  
           </div>  
         </div>
         <div className={styles.OneThird} >
         <div className={styles.Pack}>
            <label className={styles.lbl}>To</label> 
            <div>
              <input ref={to} onChange={toChange} className={styles.Input} type="datetime-local"/>
              {
               toState && 
              <label className={styles.ErrorLbl} >Fill this field</label>  
              }  
            </div>  
           </div> 
         </div>
         </>     } 
         <div className={styles.SearchButtonContainer}>
            <button onClick={filterData} className={styles.SearchButton}>
              Search
            </button>
         </div>
   
       </div>

      {
       load && <Loading/>
      } 
      
       <div className={styles.TableContainer}>
         { Array.isArray(data) ? 
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

          {Array.isArray(data)  && 
        
        <div>
          <div className={styles.ButtonsContainer}>
            <button onClick={()=>shiftQuery('first')} className={styles.Button}> 
               1
             </button>
             <div>....</div>
             <button onClick={()=>shiftQuery('prev')} className={styles.Button}> 
              <FontAwesomeIcon   icon={faAngleDoubleLeft}></FontAwesomeIcon>
             </button>
             <div> Showing {meta.current_page } out of {meta.last_page} </div>
             <button onClick={()=>shiftQuery('next')} className={styles.Button}> 
              <FontAwesomeIcon   icon={faAngleDoubleRight}></FontAwesomeIcon>
             </button>
             <div>....</div>
             <button onClick={()=>shiftQuery('last')}  className={styles.Button}> 
               {meta.last_page}
             </button>
          </div>
       </div>
       }{!Array.isArray(data) &&
        <div className={styles.NoData}>No data to show!</div>
       }
        </div> 
  </div>);
    
}

export default SalesAndReceived;