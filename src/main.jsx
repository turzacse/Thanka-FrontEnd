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
import Thanaka from './Layout/Thanaka.jsx';
import LandingPage from './Pages/Landing Page/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Basic/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/home/about',
        element: <AboutUs/>
      }
    ]
  },
  {
    path: '/',
    element: <Thanaka/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
