import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search.jsx';
import MoviePage from './components/MoviePage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviePage></MoviePage>
  </StrictMode>
)
