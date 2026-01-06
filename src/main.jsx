import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseCard from './components/Test.jsx'


const user = {
  name: "Ray",
  age: 17,
  city: "Hanoi"
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UseCard props={user} />
  </StrictMode>,
)
