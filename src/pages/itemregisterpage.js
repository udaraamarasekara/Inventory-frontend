import React from "react";
import Myform from "../presets/form";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
import Mytable from "../presets/table";



const Itemregisterpage=(props)=>
{
  var tableElements=['name','age','title'];
  var tableData= [
    {
      name:"udara",
      age:24,
      title:30
    },
    {
      name:"udara",
      age:24,
      title:30

    }
    ,  {
      name:"udara",
      age:24,
      title:30

    },
    {
      name:"udara",
      age:24,
      title:30

    }
  ]

  var elements=[{name:'Itemcode'},{name:'Description'},{name:'Unit'}
  ,{name:'Unit price'},{name:'Quantity',type:'number'},{name:'Purchase price',type:'number'},
  {name:'Expired date',type:'date'},{name:'Re odrer level',type:'number'},{name:'Brand'},{name:'Model'},
  {name:'Category'},{name:'Supplier'},{name:'Add',type:'submit'},{name:'Back',type:'button'}]; 
  return(<><Myform elements={elements} title={props.title}/><Mytable tableElements={tableElements} title="g" tableData={tableData}/></>) ; 
}
export default Itemregisterpage;

