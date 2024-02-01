import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import Main from './Components/Layout/Main';
import Orders from './Components/Orders/Orders.jsx';
import Grandpa from './Components/Grandpa/Grandpa.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path:'orders',
        element: <Orders></Orders>,
        
      },
      {
        path:'grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
