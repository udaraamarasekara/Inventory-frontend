import './RadioButton.css';

function RadioButton({text,setName,name,value}){

  return(
    <div className="RadioButtonContainer" >
        <div  onClick={()=>{setName(value)}} className="RadioButton">
            {
             name===value &&  <div className="ActiveRadioButton" ></div>  
            }
        </div>
        <div className="Label" >{text}</div>
       
    </div>
  );
}

export default RadioButton;