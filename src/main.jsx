import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { MainPage } from './pages/MainPage.jsx'
import { BuyTicketsPage } from './pages/BuyTicketsPage.jsx'
import { MapPage } from './pages/MapPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'

const router = createBrowserRouter([
  {path: '/',
    element: <MainPage />
  },
  {path: '/ingressos',
    element: <BuyTicketsPage />
  },
  {path: '/contato',
    element: <ContactPage />
  },
  {path: '/mapa',
    element: <MapPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
