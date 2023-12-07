import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CustomSelect.css';
import { useRef, useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function CustomSelect({optionData,setCurrentVal}){
const [name,setName]=useState(optionData[0]);
const [SelectActive,setSelectActive]=useState(false);
const [options,setOptions]=useState("options");
const [visible,setVisible]=useState('none');
const [arrowIcon,setArrowIcon]=useState(false);
const clicked=useRef(false);

document.onclick=(e)=>{
if(clicked.current && !clicked.current.contains(e.target)){
  setArrowIcon(false);
  setOptions('fOut');
  setVisible('none');
  window.setTimeout(function () {
    setSelectActive(false);

  // do stuff after animation has finished here
}, 600);
}
}
const changeValue=(value)=>
{
    setName(value);
    setCurrentVal(value);

}

const toggle=()=>
{
  setArrowIcon(!arrowIcon);
  if(SelectActive)
  {
    setOptions('fOut');
    setVisible('none');
    window.setTimeout(function () {
      setSelectActive(false);

    // do stuff after animation has finished here
}, 600);
  }else{
    setOptions('options');
    setSelectActive(true);
    window.setTimeout(function () {
      setVisible('block');

    // do stuff after animation has finished here
}, 600);
  }

} 

return(
<div ref={clicked} onClick={toggle} >
<div className={SelectActive ? 'SelectActive':'Select'}>
  <div className='SelectedDiv' >{name}</div>
  <FontAwesomeIcon  className={arrowIcon ? 'TurnedIcon':'NormalIcon'} icon={faCaretDown}></FontAwesomeIcon>
 
</div>
{SelectActive && 
<div  className={options} >
    { optionData.map(element => {
      return(
      <div key={element} className='option'>
        <div style={{display:`${visible}`}} className='optionText' onClick={()=>changeValue(element)} >{element}</div> 
      </div> );  
    })
    
    }
</div>
}
<div>
</div>  
</div>
);}

export default CustomSelect;