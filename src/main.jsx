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
        element: <AddAtoy></AddAtoy>
      },
      {
        path: '/alltoys',
        element: <AllToy></AllToy>
      },
      {
        path: '/toy/:id',
        element:<DetailsCard></DetailsCard>,
        loader: ({params})=> fetch (`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: 'mytoys',
        element: <MyToys></MyToys>
      },
      
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params})=> fetch (`http://localhost:5000/toys/${params.id}`)
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
