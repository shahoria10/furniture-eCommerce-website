import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/contact.jsx'
import Shop from './pages/shop/Shop.jsx'


const router = createBrowserRouter([
  {path:"/", element:<App />,
    children:[
      {path: '/', element:<Home />},
      {path: "/About", element:<About />},
      {path: "/Contact", element:<Contact />},
      {path: "/Shop", element:<Shop />},
    ]
  }

])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
