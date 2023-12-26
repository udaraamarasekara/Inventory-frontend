import AdminDashboard from './AdminDashboard';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminPortal from './AdminPortal';
import Login from './Login';
import  * as All  from './requests';   
import ProtectedRoutes from './ProtectedRoutes';
import React from 'react';
  const routes = createBrowserRouter(
    createRoutesFromElements(
    <>
      <Route path='/' element={<ProtectedRoutes/>}>
        <Route path='/' element={<AdminPortal/>}>
          <Route loader={All.goodsCount} path='/dashboard'  element={<AdminDashboard/>}/>
        </Route>
      </Route>
      <Route path='*' element={<Login/>}/>
    </>
    )
  );
    export default routes;