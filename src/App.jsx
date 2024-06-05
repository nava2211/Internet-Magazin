import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/login';
import Registration from './pages/registration/registration';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Product from './pages/product/product';
import ProductById from './pages/productById/productById';
import WishList from './pages/wishList/wishList';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Login/>
    },
    {
      path: "/registration",
      element: <Registration/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/about",
      element:<About/>
    },
    {
      path: "/contact",
      element:<Contact/>
    },
    {
      path: "/product",
      element:<Product/>
    },
    {
      path: "/productById",
      element:<ProductById/>
    },
    {
      path: "/wishList",
      element:<WishList/>
    }
  ])
  return <RouterProvider router={router} />;
}

export default App