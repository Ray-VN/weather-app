import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Footer } from './components/Base'
import { SearchPage } from './pages/SearchPage'



const user = {
  name: "Ray",
  age: 17,
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Footer /> */}
    <SearchPage />
  </StrictMode>,
)
