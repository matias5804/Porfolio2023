import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/home/Home'
import WorkWithMe from './components/Pages/workWithMe/WorkWithMe'
import Contacto from './components/Pages/contacto/Contacto'
import Services from './components/Pages/services/Services'
import Cv from './components/Pages/cv/Cv'
import NavBarDos from './components/navBar/NavBarDos'



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        
        <NavBarDos/>

        <Routes>


          <Route path="/" element={<Home/>}/>
          <Route path="/Pages/Contacto" element={<Contacto/>}/>
          <Route path="/Pages/Services" element={<Services/>}/>
          <Route path="/Pages/WorkWithMe" element={<WorkWithMe/>}/>
          <Route path="/Pages/Cv" element={<Cv/>}/>
          <Route path="*" element={<Navigate to="/" />} />


        </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App
