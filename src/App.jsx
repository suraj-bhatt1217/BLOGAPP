import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'

//pages
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage/ArticlesListPage'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

// css
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
    </>
  )
}

export default App