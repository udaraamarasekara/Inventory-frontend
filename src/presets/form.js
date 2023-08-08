import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, } from "react-bootstrap";
import '../app.css';
import { Link } from "react-router-dom";

const Inputtype=(props)=>{ return (
    <Form.Group className="col-md-2 justify-content-center " controlId={props.name}>
      {
        props.type!=='submit' &&  props.type!=='button' && props.type!=='select'  &&<> <Form.Label  className="row ">{props.name}</Form.Label>
        <Form.Control className="row" min="0" type={props.type} placeholder={"Enter "+props.name} name={props.name} id={props.name}/>
        </>
      } 
      {
        !props.type &&<> <Form.Label  className="row ">{props.name}</Form.Label>
        <Form.Control className="row" type="text" placeholder={"Enter "+props.name} name={props.name} id={props.name}/>
      </>
      }
       {
       (props.type==='submit' ||  props.type==='button' )&& props.name!=='Back' &&<> 
       <Form.Label  className="row ">&nbsp;</Form.Label>
        <Form.Control className="row btn btn-success"value={props.name} type={props.type} placeholder={"Enter "+props.name} name={props.name} id={props.name}/>
        </>
      } 
       {
       (props.type==='submit' ||  props.type==='button' )&& props.name==='Back' &&<> 
       <Form.Label  className="row ">&nbsp;</Form.Label><Link to="/">
        <Form.Control className="row btn btn-success"value={props.name} type={props.type} placeholder={"Enter "+props.name} name={props.name} id={props.name}/>
        </Link> </>
      } 
      {props.type==='select' &&<>
      <Form.Label  className="row ">{props.name}</Form.Label>
      <MyselectOption  name={props.name} type={props.type} options={props.options}/> </>
    
    }
       </Form.Group>);
}

const MyselectOption =(props)=>{ return (
  <Form.Select className="row " name={props.name} type={props.type} id={props.name} placeholder={"Select" + props.name}>
   
   
    {props.options.map((element) => {
    return <option key={element}>{element}</option>;
    })}
    
  </Form.Select>);
}

const Myform=(props)=> {
    return (
    <Card className="mx-5 my-5">
     <Card.Header className="bg-info">
       <h3>{props.title}</h3>
     </Card.Header>
     <Card.Body>   
        <Form className="row px-1">
        {props.elements.map((sample)=>{
       
          
          if(sample.type==="select")
          {
            return <Inputtype name={sample.name} options={sample.options}  type={sample.type}/> ;
          } 
          else if(sample.hasOwnProperty('type'))
          {
            return <Inputtype name={sample.name}  type={sample.type}/> ;
          }
          else
          {
            return <Inputtype name={sample.name}  value={sample.value} type="text"/> ;
          }    

        })} 
        </Form>
      </Card.Body>  
    </Card> 
    );
}
export default Myform;