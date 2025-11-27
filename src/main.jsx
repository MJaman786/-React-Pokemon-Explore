import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import PokemonContextProvider from './Data/Data'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </StrictMode>,
)
