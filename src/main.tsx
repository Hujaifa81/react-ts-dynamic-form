import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes.tsx'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
