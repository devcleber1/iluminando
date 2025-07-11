import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from '../Components/componentsHome/Footer/Footer'
import Header from '../Components/componentsHome/Header/Header'
import Home from '../Pages/Home/Home'
import WhoWeAre from '../Pages/WhoWeAre/About'
import Workshops from '../Pages/Workshops/Workshop'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<WhoWeAre />} />
            <Route path="/oficinas" element={<Workshops />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
