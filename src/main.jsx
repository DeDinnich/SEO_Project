import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <App/>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
