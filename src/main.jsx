import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
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
