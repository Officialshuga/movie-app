import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieDetails from './pages/movieDetails/MovieDetails.jsx'
import SearchPage from './pages/searchpage/searchPage.jsx'
import Error from './pages/error/Error.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/movie/:id' element={<MovieDetails/>}/>
      <Route path='/searchPage' element={<SearchPage />}/>
      <Route path='*' element={<Error />} />
      <Route path="searchpage" element={<SearchPage />} />
    </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
)
