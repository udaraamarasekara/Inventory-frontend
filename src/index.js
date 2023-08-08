import React from "react";
import  ReactDOM from "react-dom/client";
import Header from './presets/header';
import Page from './pages/homepage';
import Itemregisterpage from './pages/itemregisterpage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Creatiions from "./pages/creationspage";
import Mysale from "./pages/salespage";
import BestItems from "./pages/bestitemspage";
import { getCookie } from "./urls";
 getCookie();
const root= ReactDOM.createRoot(document.getElementById('root')); 
root.render(

 <Router>
   <>
    <Header/>
     <Routes>
        <Route path="Item%20Register" element={<Itemregisterpage title="Item Register"/>}/>
     </Routes>
     <Routes>
        <Route path="/" element={<Page/>}/>
     </Routes>
     <Routes>
        <Route path="GRN" element={<Itemregisterpage title="GRN"/>}/>
     </Routes>
     <Routes>
        <Route path="Creations" element={<Creatiions/>}/>
     </Routes>
     <Routes>
        <Route path="Sales" element={<Mysale/>}/>
     </Routes>
     <Routes>
        <Route path="Best%20items" element={<BestItems/>}/>
     </Routes>
   </>
 </Router>,
);  
   
      