import React from 'react'
import { Link } from 'react-router-dom'
import cvES from '../../../assets/img/pictures/cv-en-large.png'
import cvEspañol from '../../../assets/img/pictures/Matias Alonso - FRONT-END español -2023.pdf'
import cvIngles from '../../../assets/img/pictures/Matias Alonso - FRONT-END english -2023.pdf'
import FooterCv from '../../footer/FooterCv'
import "./cv.css"

const Cv = () => {
  return (
    <div className='fondoCv'>
      <div className='divFondoCv'>
          <a href={cvEspañol}  className='descargarCv' download='cvES-MatiasAlonso'>Donwload CV - ES</a>
          <a href={cvIngles} className='descargarCv' download='cvEN-MatiasAlonso'>Donwload CV - EN</a>
          <Link to='/Pages/WorkWithMe' className='linkCv'>WORK WITH ME</Link>
      </div>
      <img src={cvES} alt='cv'/>
      <FooterCv/>
    </div>
  )
}

export default Cv
