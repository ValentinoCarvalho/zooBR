import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { MainPage } from './pages/MainPage.jsx'
import { BuyTicketsPage } from './pages/BuyTicketsPage.jsx'
import { MapPage } from './pages/MapPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { EducationalPage } from './pages/EducationalPage.jsx'
import { TermosECondicoes } from './pages/TermosECondicoes.jsx'
import { Programacao } from './pages/Programacao.jsx'

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
  },
  {
    path: "/educativo",
    element: <EducationalPage />
  },
  {
    path: "/termos-e-condicoes",
    element: <TermosECondicoes/>
  },
  {
    path: "/horarios",
    element: <Programacao />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
