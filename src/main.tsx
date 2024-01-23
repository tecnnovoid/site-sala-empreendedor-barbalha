import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './styles/main.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Magazine } from './pages/Magazine.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'revista',
    element: <Magazine />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
