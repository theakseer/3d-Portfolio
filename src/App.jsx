import React from 'react'
// import './index.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
//  import Contact from './pages/Contact'
//  import About from './pages/About'
//  import Projects from './pages/Projects'
//  import Home from './pages/Home'
 import {Contact  ,About  ,Projects  ,Home } from './pages/'




const App = () => {
  return (
    <main className='bg-slate-300/20 h-[100%]'>
        <Router>
            <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
        </Router>
    </main>
  )
}

export default App