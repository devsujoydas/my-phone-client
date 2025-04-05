import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Pages/Home/Home';
import Phones from './Pages/Phones/Phones';
import Hero from './Pages/Hero/Hero';
import PhoneDetails from './Pages/Phones/PhoneDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path: '/phones',
        element: <Phones />,
        loader:()=>fetch('http://localhost:3000/phones')
      },
      {
        path: '/phones/:id',
        element: <PhoneDetails/>,
        loader:({params})=>fetch(`http://localhost:3000/phones/${params.id}`)
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
