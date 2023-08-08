import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
import Myform from '../presets/form';
import barChart from "../presets/barChart";
const chart=new barChart();
const Chart = chart.render;
const BestItems=()=>{
    var elements=[{name:"Category name"},{name:"Item name"},{name:"Brand name"},
    {name:"Modal name"},{name:'Search',type:'submit'},{name:'Back',type:'button'}];
 return (
   <> <Myform elements={elements} title="Best Items"/><Chart/></>
 )
}

export default BestItems;