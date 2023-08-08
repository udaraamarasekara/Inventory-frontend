import React from "react";
import Myform from "../presets/form";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
import Mytable from "../presets/table";

const Mysale=()=>{
    var saleElements=[{name:"Item type", type:"select" ,options:['Creation','Row Item']},
    {name:'Quantity',type:'number'},{name:'Customer'},{name:'Add',type:'submit'},{name:'Back',type:'button'}];
    return(
      <Myform elements={saleElements} title="Sales"/>
    );
}
export default Mysale;