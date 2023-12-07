import AdminDashboard from './AdminDashboard';
import { createBrowserRouter } from 'react-router-dom';
import AdminPortal from './AdminPortal';
import Login from './Login';

const routes = createBrowserRouter([
  sessionStorage.getItem('token') ? {
      path: "/",
      element: <AdminPortal />,
      children: [
        {
          path: "/dashboard",
          element:<AdminDashboard/>,
        },
       
      ],
    }:
    {
      path: "*",
      element: <Login/>,
    }
  ]);
  export default routes;