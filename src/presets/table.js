import { Table, Card,Form } from "react-bootstrap";
import {React, useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
import Pagination from 'react-bootstrap/Pagination';
import  ReactDOM from "react-dom";


let tableData;
sessionStorage.setItem('searchpag',0);
const Mytable=(props)=>
 {    const searched= useRef(false);

  const [currentRow,setCurrentRow]=useState(0);
  let lastRow=Math.ceil((props.tableData.length)-1);
   tableData=props.tableData.slice(currentRow,currentRow+3)
  return (
    <Card className="mx-5 my-5">
     <Card.Header className="bg-info">
       <h3>{props.title}</h3>
     </Card.Header>
     <Card.Body> 
            <Mysearch tableid={props.title} searched={searched} tabledata={tableData}/>
            <Table striped responsive>
                <thead> 
                 <tr>       
                    {
                    props.tableElements.map((tableHeads)=>{
                    return <th>{tableHeads}</th>  ;
                    })}      
                 </tr>     
                </thead>
                <tbody id={props.title}>  
                  {
                    tableData.map((tableRows)=>{
                    return<tr>  
                    { Object.values(tableRows).map((cell)=>
                      {return <td>{cell}</td>}
                      
                    ) }
                  </tr>
                  })
                  }
                   
                </tbody>
            </Table>
            {props.tableData.length>3 && <Mypagination searched={searched} lastRow={lastRow} currentRow={currentRow} Maxlength={props.tableElements.length} setCurrentRow={setCurrentRow} />  
}
            </Card.Body>  
    </Card> 
  );


}


const Mypagination=(props)=> {
  useEffect(()=>{
    if(props.searched.current===true)
    {
      window.location.reload();
    }
  })
  
  return (
    <Pagination>
      <Pagination.First onClick={()=>props.setCurrentRow(0)} />
      {props.currentRow!==0 &&       <Pagination.Prev onClick={()=>props.setCurrentRow(prevRow=>prevRow-3)}/>}
      <Pagination.Item /> 
      {props.currentRow!==props.lastRow && <Pagination.Next onClick={()=>props.setCurrentRow(prevRow=>prevRow+3)} />}
      <Pagination.Last onClick={()=>props.setCurrentRow(Math.ceil(props.Maxlength/3)*3)} />
    </Pagination>
  );

}

const Mysearch=(props)=>{

  return (<><div className="row"> <div className="col-md-8"></div><div className="col-md-4 ">
        <Form.Control className="col-4"  onKeyUp={(e)=>search(props.tableid,props.searched, e.target.value,props.tabledata)}  min="0" placeholder={"Search "} />
  </div></div></>)
}

function search(tableId,searched,searchValue,tableData){
     searched.current=true;
     ReactDOM.render(<> {
      tableData.map((tableRows)=>{
        if(JSON.stringify(tableRows).indexOf(searchValue) > -1){ 
            return<tr>  
            { Object.values(tableRows).map((cell)=>
              {return <td>{cell}</td>}
              
           )}
          </tr>
         }else
         {
          return "No data";
         }
   
    })
    }</>,document.getElementById(tableId));

}



export default Mytable;