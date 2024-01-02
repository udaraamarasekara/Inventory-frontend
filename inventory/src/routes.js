import AdminDashboard from './AdminDashboard';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminPortal from './AdminPortal';
import Login from './Login';
import  * as All  from './requests';   
import ProtectedRoutes from './ProtectedRoutes';
import React from 'react';
import SingleDataObject from './SingleDataObjectView';
import AdminProductManager from './AdminProductManager';
  const routes = createBrowserRouter(
    createRoutesFromElements(
    <>
      <Route path='/' element={<ProtectedRoutes/>}>
        <Route path='/' element={<AdminPortal/>}>
          <Route loader={All.goodsCount} path='/dashboard'  element={<AdminDashboard/>}/>
          <Route loader={(params)=>{ return All.singleItem(params)}} path='/searchResults/:obj/:id'  element={<SingleDataObject/>}/>
          <Route path='/productManager' element={<AdminProductManager/>}/>
        </Route>
        
      </Route>
      <Route path='*' element={<Login/>}/>
    </>
    )
  );
    export default routes;