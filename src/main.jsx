import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Basic from './Layout/Basic.jsx';
import Home from './Pages/Home/Home.jsx';
import AboutUs from './Pages/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <AboutUs/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
