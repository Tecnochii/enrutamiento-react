import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Principal from './components/Principal'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Characters from './pages/Characters'
import Character from './pages/Character'





function App() {

  return (
    <>




      <Router>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} /> 
          <Route path= '/characters/:id/:casa' element={<Character />} />
          <Route path='*' element={<h2>No existe esta pagina</h2>} />
        </Routes>


        <Footer />
      </Router>

    </>
  )
}

export default App
