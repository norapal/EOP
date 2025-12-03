import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutBilly from './pages/AboutBilly'
import Facility from './pages/Facility'
import Conformation from './pages/Conformation'
import Performance from './pages/Performance'
import Lameness from './pages/Lameness'
import HealthWellness from './pages/HealthWellness'
import Pedigree from './pages/Pedigree'
import Budget from './pages/Budget'
import Citations from './pages/Citations'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutBilly />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/conformation" element={<Conformation />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/lameness" element={<Lameness />} />
          <Route path="/health" element={<HealthWellness />} />
          <Route path="/pedigree" element={<Pedigree />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/citations" element={<Citations />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
