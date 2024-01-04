import styles from './SingleDataObject.module.css';
import Api from './Api';
import { useLoaderData, useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import Loading from './Loading';
import noImg from './noImg.png';
function SingleDataObject(){
    
    const data =useLoaderData();
    const viewImg=useRef(false);  
    const viewOnLoad=useRef(false);  

    const errorOccured=()=>{
      viewImg.current= false;
      viewOnLoad.current=false;
    }
    const loading=()=>{
      viewImg.current= false;
      viewOnLoad.current=true;
    }
    const completed=()=>
    {
      viewImg.current= true;
      viewOnLoad.current=false;
      console.log(data);
    }
return(
  <div className={styles.Parent}>
    <div className={styles.DataRow} >
      <div className={styles.DataArea}>
         <div className={styles.Heading}>
            {data.response.name}  -  {data.type}
        </div>
        {Object.entries(data.response).filter(([key,value])=>{return key!=='id' } ).map(([key,value])=>{
          return <div key={key} className={styles.RestData}>
               {key} - {value}       
          </div>
        })
       
        }
      </div>
        
        <div className={styles.ImgDiv}>
            { viewImg.current ?
            <img src='' onLoad={loading} onComplete={completed} onError={errorOccured}  alt='Not' /> :
            viewOnLoad.current ?
            <Loading/> 
            :
             <img className={styles.NoImg} alt='f'  src={noImg} />
            }  
  
        </div>
    </div>
  </div>

);

}



export default SingleDataObject;