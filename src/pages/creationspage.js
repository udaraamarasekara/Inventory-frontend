import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab,Tabs } from "react-bootstrap";
import '../app.css';
import Myform from '../presets/form';


const Creatiions=()=> {
   var   newCreationElements =[{name:'Itemcode'},{name:'Description'},
   {name:'Unit'},{name:'Unit price',type:'number'},{name:'Add new',type:'submit'},{name:'Back',type:'button'}];
   var existingCreationElements =[{name:'Item'},{name:'Search',type:'submit'},{name:'Back',type:'button'}];
   var creationStockElements =[{name:'Item'},{name:'Quantity', type:'number'},
   {name:'Add',type:'submit'},{name:'Back',type:'button'}];
    return (
      <Tabs
        defaultActiveKey="newCreation"
        id="creations"
        className="my-3"
      >
        <Tab eventKey="newCreation" title="New Creation">
          <Myform elements={newCreationElements} title="New creation"/>
        </Tab>
        <Tab eventKey="existingCreation" title="Existing Creation">
          <Myform elements={existingCreationElements} title="Existing creation"/>
        </Tab>
        <Tab eventKey="creationStock" title="Creation Stock">
          <Myform elements={creationStockElements} title="Creation Stock"/>
        </Tab>
      </Tabs>
    );
  }
  
  export default Creatiions;