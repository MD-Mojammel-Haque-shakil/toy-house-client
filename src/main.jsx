import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
import AuthProvider from './providers/AuthProvider';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AddAtoy from './pages/AddAtoy/AddAtoy';
import AllToy from './pages/AllToy/AllToy';
import DetailsCard from './pages/AllToy/DetailsCard';
import MyToys from './pages/MyToys/MyToys';
import Update from './pages/MyToys/Update';
import PrivateRoutes from './pages/PrivateRoutes/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/addatoy',
        element: <PrivateRoutes><AddAtoy></AddAtoy></PrivateRoutes>
      },
      {
        path: '/alltoys',
        element: <AllToy></AllToy>
      },
      {
        path: '/toy/:id',
        element: <PrivateRoutes><DetailsCard></DetailsCard></PrivateRoutes>,
        loader: ({params})=> fetch (`https://toys-home-server.vercel.app/toys/${params.id}`)
      },
      {
        path: 'mytoys',
        element: <PrivateRoutes> <MyToys></MyToys></PrivateRoutes>
      },
      
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params})=> fetch (`https://toys-home-server.vercel.app/toys/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-7xl mx-auto'>
<React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>
</div>
)
