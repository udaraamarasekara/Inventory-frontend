import AdminDashboard from './AdminDashboard';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminPortal from './AdminPortal';
import Login from './Login';
import  * as All  from './requests';   
import ProtectedRoutes from './ProtectedRoutes';
import React from 'react';
import SingleDataObject from './SingleDataObjectView';
import AdminProductManager from './AdminProductManager';
import SalesAndReceived from './SalesAndReceived';
  const routes = createBrowserRouter(
    createRoutesFromElements(
    <>
      <Route path='/' loader={All.testRequest} element={<ProtectedRoutes/>}>
        <Route path='/' element={<AdminPortal/>}>
          <Route loader={All.goodsCount} path='/dashboard'  element={<AdminDashboard/>}/>
          <Route loader={(params)=>{ return All.singleItem(params)}} path='/searchResults/:obj/:id'  element={<SingleDataObject/>}/>
          <Route path='/productManager' loader={All.productTransactions} element={<AdminProductManager/>}/>
          <Route path='/salesAndReceived' loader={All.allGoods} element={<SalesAndReceived/>}/>
        </Route>  
      </Route>
      <Route path='*' element={<Login/>}/>
    </>
    )
  );
    export default routes;