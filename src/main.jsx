import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Services from './Components/Services.jsx'
import Interior from './Components/Interior.jsx'
import Furniture from './Components/Furniture.jsx'
import Architecture from './Components/Architecture.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Gallery from './Components/Gallery.jsx'
import Homedecor from './Components/Home decor.jsx'
import Sales from './Components/Sales.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/interior' element={<Interior/>}/>
      <Route path='/furniture' element={<Furniture/>}/>
      <Route path='/architecture' element={<Architecture/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/homedecor' element={<Homedecor/>}/>
      <Route path='/sale' element={<Sales/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
