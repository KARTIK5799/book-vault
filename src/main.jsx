import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BooksProvider } from './context/BooksContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <BooksProvider>
        <App />
      </BooksProvider>
    </StrictMode>
  </BrowserRouter>

)
