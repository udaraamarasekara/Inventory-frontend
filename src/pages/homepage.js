import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import '../app.css';
import { Link } from "react-router-dom";


const MyCard=(props)=> {



    return (
          <Link className="remove-underline col-md-2  mx-3 my-3" to={props.name}> 
            <Card className="card-hover-curser bg-info" >    
                <Card.Body className="card-text  text-center">
                  {props.name}
                </Card.Body>
            </Card>
          </Link> 
  
    );
}
const Page=()=>{
    return(
     <>
      <div className="row justify-content-center">
        <MyCard name="Item Register"/>
        <MyCard name="GRN"/>
        <MyCard name="Creations"/>
        <MyCard name="Sales"/>
        <MyCard name="Best items"/>
        <MyCard name="Custom reports"/>
      </div>
     </>   
     
    );
}
export default Page;
