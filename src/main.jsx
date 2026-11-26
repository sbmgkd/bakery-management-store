import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import {Home, About, Contact, Admin, User, ShoppingCart, Login, Registration} from './pages/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='admin' element={<Admin />} />
      <Route path='user' element={<User />} />
      <Route path='shopping-cart' element={<ShoppingCart />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Registration />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
